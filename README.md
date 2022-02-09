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
    <li><a href='#models'>Models</a></li>
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

These can be used alone like this

<h4>Products</h4>

| resource | description |
-----------|-------------|
`GET /products` | returns a list of all products |
`GET /products/:id` | returns the product with the given id |
`GET /products/findByFilter` | returns products through the given filters |
`GET /products/count` | Return count of all products or products from given category |
`POST /products` | creates a single product based on the provided data |
`DELETE /products/:id` | removes the product with the given id |

<h4>Users</h4>

| resource | description                    |
-----------|--------------------------------|
`GET /users` | returns a list of all users |
`GET /users/:id` | returns the users with the given id |
`GET /users/count` | Return count of all users |
`PATCH /users/:id/attribute` | update given attribute |

<h4>Auth</h4>

| resource | description                    |
-----------|--------------------------------|
`POST /auth/register` | create new user account |
`POST /auth/login` | returns email and access token |

<h4>Categories</h4>

| resource | description                    |
-----------|--------------------------------|
`GET /categories` | returns a list of all categories |

<h4>Database Diahgram</h4>

![Imgur](https://i.imgur.com/QJaLl1m.png)

<br>

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


### Models

#### Product

```typescript
interface Product {
  id: number;
  name: string;
  shortDescription: string | SafeHtml;
  description: string | SafeHtml;
  defaultPrice: number;
  promotionPrice: number;
  isAvailable: boolean;
  category: {
    id: number;
    name: string;
    formatName: string;
    description: string | SafeHtml | null;
    heroIconAsSvg: SafeHtml;
  };
  quantity: number;
  producer: string;
  createdAt: string;
  refNumber: string;
  dataSheet: {
    key: string; value: string
    }[];
  views: {
    id: number;
    createdAt: string;
  }[];
  isPublished: boolean;
  image: string;
}
```

#### User

```typescript
interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
}
```