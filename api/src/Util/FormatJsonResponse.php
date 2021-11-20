<?php

namespace App\Util;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class FormatJsonResponse
{
  public static function success(?string $type, ?array $data, ?iterable $links, ?int $responseCode): JsonResponse
  {
    if (!is_array(array_values($data)[0])) {
      return new JsonResponse([
        'status' => $responseCode,
        'links' => $links,
        'data' => [
          'type' => $type,
          'id' => $data['id'],
          'attributes' => self::getAttributesAsArray($data)
        ]
      ]);
    }

    $arrayOfData = [];
    for ($i = 0; $i < count($data); $i++) {
      array_push($arrayOfData, [
        'type' => $type,
        'id' => $data[$i]['id'],
        'attributes' => self::getAttributesAsArray($data[$i])
      ]);
    }

    return new JsonResponse([
      'status' => $responseCode,
      'links' => $links,
      'data' => $arrayOfData
    ]);
  }

  public static function error(?string $pointer, ?string $title, ?string $details, ?int $responseCode): JsonResponse
  {
    return new JsonResponse([
      'status' => $responseCode,
      'source' => [
        'pointer' => $pointer
      ],
      'title' => $title,
      'details' => $details
    ]);
  }

  private static function getAttributesAsArray(iterable $data): array
  {
    unset($data['id']);
    $attributes = [];
    foreach ($data as $key => $value) {
      $attributes += [$key => $value];
    }

    return $attributes;
  }
}
