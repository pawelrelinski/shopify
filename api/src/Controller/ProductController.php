<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Repository\ProductRepository;
use App\Entity\Product;
use App\Util\FormatJsonResponse;
use App\Util\IsEmpty;
use DateTimeImmutable;
use ProxyManager\Factory\RemoteObject\Adapter\JsonRpc;

class ProductController extends AbstractController
{
  const API_POINTER = '/v1/products/';
  const MODEL_TYPE = 'product';

  private $productRepository;

  public function __construct(ProductRepository $productRepository)
  {
    $this->productRepository = $productRepository;
  }

  #[Route('/v1/products/data', name: 'get_metadata_about_products', methods: 'GET')]
  public function getMetaData(Request $request)
  {
    $category = $request->query->get('category');
    $productTypes = $request->query->get('productsType');

    if ($productTypes && $category) {
      $count = $this->productRepository->countProducts($category, $productTypes);
      return new JsonResponse([
        'count' => $count[0]
      ]);
    }
    if ($category) {
      $count = $this->productRepository->countProducts($category);
      return new JsonResponse([
        'count' => $count[0]
      ]);
    }
    
    $count = $this->productRepository->countProducts();
    return new JsonResponse([
      'count' => $count[0]
    ]);
  }

  #[Route('/v1/products/', name: 'add_product', methods: 'POST')]
  public function add(Request $request): JsonResponse
  {
    $data = json_decode($request->getContent(), true);
    $isEmpty = IsEmpty::check(
      data: $data,
      keys: ['name', 'description', 'amount', 'price', 'category', 'color']
    );

    if ($isEmpty['isEmpty']) {
      return FormatJsonResponse::error(
        responseCode: Response::HTTP_BAD_REQUEST,
        pointer: self::API_POINTER,
        title: 'Did not add product',
        details: 'Probabaly ' . $isEmpty['invalidKey'] . ' key was entered incorrectly.'
      );
    }

    $product = new Product();
    $product
      ->setName($data['name'])
      ->setDescription($data['description'])
      ->setAmount($data['amount'])
      ->setPrice($data['price'])
      ->setCategory($data['category'])
      ->setColor($data['color'])
      ->setCreatedAt(new DateTimeImmutable());

    $this->productRepository->saveProduct($product);

    return new JsonResponse([
      'status' => Response::HTTP_CREATED,
      'title' => 'Product created'
    ]);
  }

  #[Route('/v1/products', name: 'get_all_products', methods: 'GET')]
  public function getAll(Request $request): JsonResponse
  {
    $category = $request->query?->get('category');
    $productTypes = $request->query?->get('productsType');
    $sortBy = $request->query?->get('sortBy');
    $sortMethod = $request->query?->get('sortMethod');
    $limit = $request->query?->get('limit');
    $offset = $request->query?->get('offset') * $limit;

    $orderBy = [$sortBy => $sortMethod];
    $links = ['self' => self::API_POINTER];

    if ($productTypes) {
      $criteria = [
        'category' => $category,
        'productType' => $productTypes
      ];
      $products = $this->productRepository->findBy($criteria, $orderBy, $limit, $offset);
      
      if (!$products) {
        return $this->getErrorResponseGetAllProducts($links);
      }
  
      $data = $this->convertProductsToArray($products);
      return $this->getSuccessResponseGetAllProducts($data, $links);
    }

    if ($category) {
      $criteria = ['category' => $category];
      $products = $this->productRepository->findBy($criteria, $orderBy, $limit, $offset);

      if (!$products) {
        return $this->getErrorResponseGetAllProducts($links);
      }
  
      $data = $this->convertProductsToArray($products);
      return $this->getSuccessResponseGetAllProducts($data, $links);
    }
    
    $products = $this->productRepository->findBy([], $orderBy, $limit, $offset);

    if (!$products) {
      return $this->getErrorResponseGetAllProducts($links);
    }

    $data = $this->convertProductsToArray($products);
    return $this->getSuccessResponseGetAllProducts($data, $links);
  }

  #[Route('/v1/products/{id}', name: 'get_product_by_id', methods: 'GET')]
  public function getById(int|null $id): JsonResponse
  {
    $product = $this->productRepository->findOneBy(['id' => $id]);
    if (!$product) {
      return FormatJsonResponse::error(
        responseCode: Response::HTTP_NOT_FOUND,
        pointer: self::API_POINTER . $id,
        title: 'Not found product',
        details: 'Probably the product does not exist or the id was entered incorrectly'
      );
    }

    $links = ['self' => 'http://127.0.0.1:8000' . self::API_POINTER . $id];

    return FormatJsonResponse::success(
      responseCode: Response::HTTP_OK,
      type: self::MODEL_TYPE,
      data: $product->toArray(),
      links: $links
    );
  }

  #[Route('/v1/products/{id}', name: 'update_product_by_id', methods: 'PUT')]
  public function update(int|null $id, Request $request): JsonResponse
  {
    $product = $this->productRepository->findOneBy(['id' => $id]);
    $data = json_decode($request->getContent(), true);
    $isEmpty = IsEmpty::check(
      data: $data,
      keys: ['name', 'description', 'amount', 'price', 'category', 'color']
    );

    if ($isEmpty['isEmpty']) {
      return FormatJsonResponse::error(
        responseCode: Response::HTTP_BAD_REQUEST,
        pointer: self::API_POINTER . $id,
        title: 'Did not edit product',
        details: 'Probabaly ' . $isEmpty['invalidKey'] . ' key was entered incorrectly.'
      );
    }

    $product
      ->setName($data['name'])
      ->setDescription($data['description'])
      ->setAmount($data['amount'])
      ->setPrice($data['price'])
      ->setCategory($data['category'])
      ->setColor($data['color']);

    $updatedProduct = $this->productRepository->updateProduct($product);
    $links = ['self' => 'http://127.0.0.1:8000' . self::API_POINTER . $updatedProduct->getId()];

    return FormatJsonResponse::success(
      responseCode: Response::HTTP_OK,
      type: self::MODEL_TYPE,
      data: $updatedProduct->toArray(),
      links: $links
    );
  }

  #[Route('/v1/products/{id}', name: 'delete_product_by_id', methods: 'DELETE')]
  public function delete(int|null $id): JsonResponse
  {
    $product = $this->productRepository->findOneBy(['id' => $id]);
    $this->productRepository->removeProduct($product);

    return new JsonResponse([
      'status' => Response::HTTP_NO_CONTENT,
      'title' => 'Product deleted'
    ]);
  }

  private function convertProductsToArray(iterable $products): array
  {
    $data = [];
    foreach ($products as $product) {
      array_push($data, $product->toArray());
    }
    
    return $data;
  }

  private function getErrorResponseGetAllProducts(): JsonResponse
  {
    return FormatJsonResponse::error(
      responseCode: Response::HTTP_NOT_FOUND,
      pointer: self::API_POINTER,
      title: 'Not found any products',
      details: 'Probably the products do not exist'
    );
  }

  private function getSuccessResponseGetAllProducts($data, $links): JsonResponse
  {
    return FormatJsonResponse::success(
      responseCode: Response::HTTP_OK,
      type: self::MODEL_TYPE,
      data: $data,
      links: $links
    );
  }
}
