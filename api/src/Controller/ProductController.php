<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Repository\ProductRepository;
use App\Entity\Product;
use App\Utils\IsEmpty;

class ProductController extends AbstractController
{
    private $productRepository;
    const URL = 'http://127.0.0.1:8000/product/';

    public function __construct(ProductRepository $productRepository)
    {
        $this->productRepository = $productRepository;
    }

    #[Route('/product/{id}', name: 'get_product_by_id', methods: 'GET')]
    public function getById(int|null $id): JsonResponse
    {
        $product = $this->getProductFromRepositoryById($id);

        if (IsEmpty::checkProperty($product))
        {
            return $this->getNotFoundResponse('Product doesn\'t exist');
        }

        return new JsonResponse([
            'links' => [
                'self' => self::URL . $id
            ],
            'data' => $this->transformDataToJsonResponseData('product', $product)
        ], Response::HTTP_OK);
    }

    #[Route('/product', name: 'get_all_products', methods: 'GET')]
    public function getAll(Request $request): JsonResponse
    {
        $products = $this->productRepository->findAll();
        $data = [];

        foreach ($products as $product)
        {
            array_push($data, $this->transformDataToJsonResponseData('product', $product));
        }

        if (IsEmpty::checkProperty($data))
        {
            // TODO: Create invalid response
            return $this->getNotFoundResponse('Product doesn\'t exist');
        }

        return new JsonResponse(
            [
                'links' => [
                    'self' => self::URL
                ],
                'data' => $data
            ],
            Response::HTTP_OK
        );
    }

    #[Route('/product', name: 'add_product', methods: 'POST')]
    public function add(Request $request): JsonResponse
    {   
        $data = json_decode($request->getContent(), true);
        $keysToCheck = ['name', 'description', 'price', 'amount'];

        if (IsEmpty::checkSpecificArraysValues($data, $keysToCheck))
        {
            return new JsonResponse(['message' => 'Excepting mandatory parameters!']);
        }

        $name = $data['name'];
        $description = $data['description'];
        $price = $data['price'];
        $amount = $data['amount'];

        $product = new Product();
        $product
            ->setName($name)
            ->setDescription($description)
            ->setPrice($price)
            ->setAmount($amount);

        $this->productRepository->save($product);

        return new JsonResponse(
            ['status' => 'Product created' ],
            Response::HTTP_CREATED
        );
    }

    #[Route('/product/{id}', name: 'delete_product_by_id', methods: 'DELETE')]
    public function delete(int | string $id): JsonResponse
    {
        $product = $this->getProductFromRepositoryById($id);

        if (IsEmpty::checkProperty($product))
        {
            return $this->getNotFoundResponse('Product doesn\'t exist');
        }

        $this->productRepository->remove($product);

        return new JsonResponse(
            ['status' => 'Customer deleted'],
            Response::HTTP_NO_CONTENT
        );
    }

    #[Route('/product/{id}', name: 'update_product_by_id', methods: 'PUT')]
    public function update(int | string $id, Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $keysToCheck = ['name', 'description', 'price', 'amount'];

        if (IsEmpty::checkSpecificArraysValues($data, $keysToCheck))
        {
            return new JsonResponse(['message' => 'Excepting mandatory parameters!']);
        }

        $product = $this->getProductFromRepositoryById($id);

        if (IsEmpty::checkProperty($product))
        {
            // TODO: Create invalid response
            return $this->getNotFoundResponse('Product doesn\'t exist');
        }

        $updatedProduct = $this->productRepository->update($product);

        return new JsonResponse(
            $updatedProduct->toArray(),
            Response::HTTP_OK
        );
    }

    private function getNotFoundResponse(string $msg): JsonResponse
    {
        return new JsonResponse(
            ['message' => $msg],
            Response::HTTP_NOT_FOUND
        );
    }
    
    private function getProductFromRepositoryById(int $id): Product
    {
        return $this->productRepository->findOneBy(['id' => $id]);
    }

    private function transformDataToJsonResponseData(string $type, Product $product): array
    {
        $data = $product->toArray();
        $dataId = $data['id'];
        unset($data['id']);
        $attributes = $data;

        return [
            'type' => $type,
            'id' => $dataId,
            'attributes' => $attributes
        ];
    }
}
