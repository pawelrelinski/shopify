<span id='top'></span>
<h1 align='center'>Shopify</h1>
<p align='center'>
  Fullstack e-commerce application with products related to renewable energy.
</p>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#applications">Applications</a>
      <ul>
        <li><a href="#api">API</a></li>
        <li><a href="#client">Client</a></li>
      </ul>
    </li>
  </ol>
</details>

<hr>

## About The Project

Fullstack application as project to school. E-commerce shop with products related to renewable energy.

### Built With

#### Client
- [Angular 13](https://angular.io)
- [Tailwind](https://tailwindcss.com)
- [NGRX](https://ngrx.io)

#### API
- [NestJS 8](https://docs.nestjs.com)
- [TypeORM](https://typeorm.delightful.studio)
- [Passport JWT](http://www.passportjs.org/packages/passport-jwt/)

#### Database
- [MySQL](https://www.mysql.com)

#### Documentation
- [Compodoc](https://compodoc.github.io/compodoc/)
- [Swagger UI Express](https://github.com/scottie1984/swagger-ui-express)

<p align="right">(<a href="#top">back to top</a>)</p>

<hr>

## Applications

### API

Provides REST Api with which you can communicate with the MySQL database. <br>
It's written in NestJS. <br>
The API is generally RESTFULL and return results in JSON. <br>

#### Resource components

Major resource components supported by the API are:

- Products
- Users
- Auth
- Categories

<br>

API Features:
- Authentication ([Passport JWT](http://www.passportjs.org/packages/passport-jwt/))
- Basic RBAC implementation
- [Helmet](https://github.com/helmetjs/helmet)
- CORS

These can be used alone like this

<h4>Products</h4>

| resource | description                                            |
-----------|--------------------------------------------------------|
`GET /products` | Get all products                                       |
`GET /products/:id` | Get product by id                                      |
`GET /products/count` | Get count of all products or product in given category |
`POST /products` | Create product                                         |
`DELETE /products/:id` | Delete product by given id                             |

<h4>Users</h4>

| resource | description                    |
-----------|--------------------------------|
`GET /users` | Get all users                  |
`GET /users/:id` | Get user by given id           |
`GET /users/count` | Get count of all users         |
`PATCH /users/:id/attribute` | Update specific user attribute |

<h4>Auth</h4>

| resource | description |
-----------|-------------|
`POST /auth/register` | Register    |
`POST /auth/login` | Login       |

<h4>Categories</h4>

| resource | description                    |
-----------|--------------------------------|
`GET /categories` | Get all categories             |
`GET /categories/productsCount` | Get products count in category |
`GET /categories/count` | Get count of categories        |
`GET /categories/:id` | Get category by given id       |

<h4>Database Diagram</h4>

![Imgur](https://i.imgur.com/oJ3ePOA.png)

<br>

<p align="right">(<a href="#top">back to top</a>)</p>

### Client

Angular application for users with admin dashboard to manage. <br>

#### Features

##### User has following features:

1. Products by category
2. Products overview
3. Add/remove to shopping cart
4. Notifications when add product to shopping cart
5. Checkout
6. Profile page
7. Favourite products
8. Orders
9. Profile settings
10. Sign In/Sign Up

<br>

##### Admin has following features:
1. Add/remove products
2. Product details (stats etc)
3. Users list
4. Orders manage
