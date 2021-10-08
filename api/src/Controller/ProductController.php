<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Repository\ProductRepository;
use App\Entity\Product;

class ProductController extends AbstractController
{
  private $productRepository;

  public $mockupProducts = [];

  public function __construct(ProductRepository $productRepository)
    {
        $this->productRepository = $productRepository;

        $this->setMockupProducts();
    }

    #[Route('/v1/products', name: 'get_all_products', methods: 'GET')]
    public function getAll(): JsonResponse
    {
      return new JsonResponse([
        'data' => $this->mockupProducts
      ]);
    }

    #[Route('/v1/products/{id}', name: 'get_product_by_id', methods: 'GET')]
    public function getById(int|null $id): JsonResponse
    {
      $key = array_search($id, array_column($this->mockupProducts, 'id'));
      return new JsonResponse([
        'data' => $this->mockupProducts[$key]
      ]);
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
