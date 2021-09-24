<?php

namespace App\Entity;

use App\Repository\BrandRepository;
use App\Entity\Product;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=BrandRepository::class)
 */
class Brand
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

	/**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

	/**
     * @ORM\Column(type="text")
     */
    private $slogan;

	/**
     * @ORM\Column(type="text")
     */
    private $description;

	/**
     * ORM\OneToMany(targetEntity: Product::class, mappedBy: "brand")
     */
    private $products;

    public function __construct()
    {
        $this->products = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

	public function getSlogan(): ?string
    {
        return $this->slogan;
    }

    public function setSlogan(string $slogan): self
    {
        $this->slogan = $slogan;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getProducts(): Collection
    {
        return $this->products;
    }

	public function toArray(): array
	{
		return [
			'id' => $this->getId(),
			'name' => $this->getName(),
			'slogan' => $this->getSlogan(),
			'description' => $this->getDescription(),
			'products' => $this->getProducts()
		];
	}
}
