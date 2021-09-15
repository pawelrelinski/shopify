<?php

namespace App\Utils;

class IsEmpty
{
  public static function checkArraysValues(array $args): bool
  {
    if (self::checkLength($args))
    {
      return true;
    }

    for ($i=0; $i < $argsLength; $i++) { 
      if (self::checkProperty($args[$i]))
      {
        return true;
      }
      continue;
    }

    return false;
  }

  public static function checkSpecificArraysValues(array $args, array $keys): bool
  {
    if (self::checkLength($args))
    {
      return true;
    }

    foreach ($keys as $key) {
      if (self::checkProperty($key)) {
        return true;
      }
      continue;
    }

    return false;
  }

  public static function checkProperty(mixed $arg): bool
  {
    if (empty($arg))
    {
      return true;
    }

    return false;
  }

  private static function checkLength($arg): bool
  {
    $arg = count($arg);

    if ($arg == 0)
    {
      return true;
    }

    return false;
  }
}
