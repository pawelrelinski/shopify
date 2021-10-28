<?php 

namespace App\Util;

use Symfony\Component\HttpFoundation\JsonResponse;

class FormatJsonResponse
{
  public static function success(?string $type, ?array $data, ?array $links): JsonResponse
  {
    if (!is_array(array_values($data)[0]))
    {
      return new JsonResponse([
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
      'links' => $links,
      'data' => $arrayOfData
    ]);
  }

  public static function error(?int $status, ?string $pointer, ?string $title, ?string $details): JsonResponse
  {
    return new JsonResponse([
      'status' => $status,
      'source' => [
        'pointer' => $pointer
      ],
      'title' => $title,
      'details' => $details
    ]);
  }

  private static function getAttributesAsArray(array $data): array
  {
    unset($data['id']);
    $attributes = [];
    foreach ($data as $key => $value) {
      $attributes += [$key => $value];
    }

    return $attributes;
  }
}
