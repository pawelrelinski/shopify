<?php

namespace App\Utils;

use Symfony\Component\HttpFoundation\JsonResponse;

class ErrorJsonResponse
{
  public function __construct(
    private int $status,
    private string $pointer,
    private string $title,
    private string $details
  ) { }

  public function generate(): JsonResponse
  {
    return new JsonResponse(
      ['errors' => [
          'status' => $this->status,
          'source' => [
              'pointer' => $this->pointer
          ],
          'title' => $this->title,
          'details' => $this->details
      ]]
    );
  }
}
