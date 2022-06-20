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
- [Angular 14](https://angular.io)
- [Tailwind](https://tailwindcss.com)
- [NGRX](https://ngrx.io)

#### API
- [NestJS 8](https://docs.nestjs.com)
- [TypeORM](https://typeorm.delightful.studio)
- [Passport JWT](http://www.passportjs.org/packages/passport-jwt/)

#### Database
- [PostgreSQL](https://www.postgresql.org/)

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
- Categories
- Users
- Users Address
- Auth

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
<b style="color: red;">Private</b> `POST /products` | Create product |
<b style="color: green;">Public</b> `GET /products` | Get all products |
<b style="color: red;">Private</b> `POST /products/upload` | Add image |
<b style="color: green;">Public</b> `GET /products/{id}` | Get product by id |
<b style="color: red;">Private</b> `PATCH /products/{id}` | Update product by id |
<b style="color: red;">Private</b> `DELETE /products/{id}` | Delete product |

<h4>Categories</h4>

| resource | description                                            |
-----------|--------------------------------------------------------|
<b style="color: red;">Private</b> `POST /categories` | Create category |
<b style="color: green;">Public</b> `GET /categories` | Get all categories |
<b style="color: green;">Public</b> `GET /categories/{id}` | Get category by id |

<h4>Users</h4>

| resource | description                    |
-----------|--------------------------------|
<b style="color: red;">Private</b> `POST /users` | Create user |
<b style="color: red;">Private</b> `GET /users/` | Get all users |
<b style="color: red;">Private</b> `GET /users/me` | Get user by id or email |
<b style="color: red;">Private</b> `PATCH /users/{id}` | Update user by id |
<b style="color: red;">Private</b> `DELETE /users/{id}` | Delete user by id |

<h4>Users Address</h4>

| resource | description                    |
-----------|--------------------------------|
<b style="color: red;">Private</b> `POST /users-address` | Create user address |
<b style="color: red;">Private</b> `GET /users-address` | Get all user address |
<b style="color: red;">Private</b> `GET /users-address/{id}` | Get user address by id |
<b style="color: red;">Private</b> `POST /users-address/{id}` | Update user address by id |
<b style="color: red;">Private</b> `DELETE /users-address/{id}` | Delete user address by id |
<b style="color: red;">Private</b> `GET /users-address/{userId}` | Get user address by user id |

<h4>Auth</h4>

| resource | description |
-----------|-------------|
<b style="color: green;">Public</b> `POST /auth/login` | Login to service    |


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
