<?php 

namespace App\Util;

class IsEmpty
{
  public static function check(mixed $data, ?array $keys): bool 
  {
    if (!empty($keys)) 
    {
      for ($i = 0; $i < count($keys) - 1; $i++)
      { 
        if (empty($data[$keys[$i]]))
          return true;
        else {
          return false;
        }
      }
    }

    if (is_array($data))
    {
      for ($i = 0; $i < count($data) - 1; $i++) { 
        if (empty(array_values($data)[$i]))
          return true;
        else {
          continue;
        }
      }
      return false;
    }

    if(empty($data))
    {
      return true;
    }
    return false;
  }
}
