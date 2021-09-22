# shopify

Fullstack application as project to school.
E-commerce shop with clothes.

## Technologies Reference
### Client

- [Angular](https://angular.io)
- [Angular CLI](https://cli.angular.io/)
- [Tailwind](https://tailwindcss.com)

### Server

- [PHP 8](https://www.php.net/releases/8.0/en.php)
- [Symfony](https://symfony.com/doc/current/the-fast-track/pl/index.html)
- [Doctrine ORM](https://www.doctrine-project.org)

### Documentation

- [Compodoc](https://compodoc.github.io/compodoc/)

### Database

- MySQL

## Applications

### Api

Provides REST Api with which you can communicate with the MySql database. <br>
It is written in PHP 8 using the Symfony framework. <br>
The API is generally RESTFULL and return results in JSON. <br>

#### Resource components

Major resource components supported by the API are:

- products
- users
- brand

These can be used alone like this

| resource | description |
-----------|-------------|
`GET /products` | returns a list of all products |
`GET /products/:id` | returns the product with the given id |
`POST /products` | creates a single product based on the provided data |
`PUT /products/:id` | change of product data with the given id |
`DELETE /products/:id` | removes the product with the given id |


### Client

Angular application for users. <br>


#### REST API responses
Api example responses for the client
<br>

Successfully response
```json
{
    "links": {
        "self": "http://127.0.0.1:8000/products/2"
    },
    "data": {
        "type": "product",
        "id": 2,
        "attributes": {
            "name": "T-shirt",
            "description": "This is the black t-shirt",
            "amount": 5,
            "price": 12.99,
            "created_at": "12-9-2021",
            "category": "men",
            "color": "black",
            "material": "velour"
        }
    }
}
```
<br>

Error response
```json
{
    "errors": {
        "status": 404,
        "source": {
            "pointer": "/products/7"
        },
        "title": "Not found product",
        "details": "Probably the product does not exist or the id was entered incorrectly"
    }
}
```
