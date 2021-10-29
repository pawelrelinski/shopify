<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/v1/products' => [
            [['_route' => 'add_product', '_controller' => 'App\\Controller\\ProductController::add'], null, ['POST' => 0], null, true, false, null],
            [['_route' => 'get_all_products', '_controller' => 'App\\Controller\\ProductController::getAll'], null, ['GET' => 0], null, false, false, null],
        ],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/v1/products/([^/]++)(*:28)'
                .'|/_error/(\\d+)(?:\\.([^/]++))?(*:63)'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        28 => [[['_route' => 'get_product_by_id', '_controller' => 'App\\Controller\\ProductController::getById'], ['id'], ['GET' => 0], null, false, true, null]],
        63 => [
            [['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
