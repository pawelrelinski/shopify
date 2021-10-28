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

class ProductController extends AbstractController
{
  private $productRepository;

  public $mockupProducts = [];

  public function __construct(ProductRepository $productRepository)
    {
        $this->productRepository = $productRepository;

        $this->setMockupProducts();
    }

    #[Route('/v1/products', name: 'add_product', methods: 'POST')]
    public function add(Request $request): JsonResponse
    {
      $data = json_decode($request->getContent(), true);
      $isEmpty = IsEmpty::check(
        $data,
        keys: ['name', 'description', 'amount', 'price', 'category', 'color']
      );
      
      if ($isEmpty)
      {
        return FormatJsonResponse::error(
          status: 404,
          pointer: '/v1/products/',
          title: 'Not added product',
          details: 'Probably data was entered incorrectly'
        );
      }
    }

    #[Route('/v1/products', name: 'get_all_products', methods: 'GET')]
    public function getAll(): JsonResponse
    {
      $links = ['self' => '/v1/products/'];

      return FormatJsonResponse::success(
        type: 'product',
        data: $this->mockupProducts,
        links: $links
      );
    }

    #[Route('/v1/products/{id}', name: 'get_product_by_id', methods: 'GET')]
    public function getById(int|null $id): JsonResponse
    {
      $key = array_search($id, array_column($this->mockupProducts, 'id'));
      if ($key == false)
      {
        return FormatJsonResponse::error(
          status: 404,
          pointer: '/v1/products/' . $id,
          title: 'Not found product',
          details: 'Probably the product does not exist or the id was entered incorrectly'
        );
      }

      $links = [ 'self' => 'http://127.0.0.1:8000/v1/products/' . $id ];

      return FormatJsonResponse::success(
        type: 'product',
        data: $this->mockupProducts[$key],
        links: $links
      );
    }
    
    private function setMockupProducts(): void
    {
      for ($i=1; $i <= 10 ; $i++) { 
        $product = new Product();
        $product->setId($i);
        $product->setName('T-shirt');
        $product->setDescription('This is a tshirt');
        $product->setAmount(12);
        $product->setPrice('30.99');

        array_push($this->mockupProducts, $product->toArray());
      }
    }
}
