<?php 

namespace App\Util;

class IsEmpty
{
  public static function check(mixed $data, ?iterable $keys): array 
  {
    try {
      foreach ($keys as $key => $value) {
        if (!empty($data[$value])) {
          continue;
        } else {
          return [
            'isEmpty' => true,
            'invalidKey' => $value
          ];
        }
      }
      return [ 'isEmpty' => false];
    } catch (\ErrorException $e) {
      return [
        'error' => $e
      ];
    }
  }
}
