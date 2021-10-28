<?php 

namespace App\Model;

interface ProductInterface
{
  public function getId(): ?int;
  public function setId(int $id): self;
  public function getName(): ?string;
  public function setName(string $name): self;
  public function getDescription(): ?string;
  public function setDescription(string $description): self;
  public function getAmount(): ?int;
  public function setAmount(int $amount): self;
  public function getPrice(): ?string;
  public function setPrice(string $price): self;
  public function getCreatedAt(): ?\DateTimeImmutable;
  public function setCreatedAt(\DateTimeImmutable $created_at): self;
  public function getCategory(): ?string;
  public function setCategory(string $category): self;
  public function getColor(): ?string;
  public function setColor(string $color): self;
}
