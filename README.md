# Shopify

Fullstack application as project to school. E-commerce shop with products related to renewable energy.

## Technologies Reference
### Client

- [Angular 13](https://angular.io)
- [Tailwind](https://tailwindcss.com)
- [NGRX](https://ngrx.io)

### Server

- [NestJS 8](https://docs.nestjs.com)
- [TypeORM](https://typeorm.delightful.studio)
- [Passport JWT](http://www.passportjs.org/packages/passport-jwt/)

### Documentation

- [Compodoc](https://compodoc.github.io/compodoc/)

### Database

- [MySQL](https://www.mysql.com)

## Applications

### Api

Provides REST Api with which you can communicate with the MySql database. <br>
It is written in NestJS. <br>
The API is generally RESTFULL and return results in JSON. <br>

#### Resource components

Major resource components supported by the API are:

- Products
- Users
- Auth

These can be used alone like this

| resource | description |
-----------|-------------|
`GET /products` | returns a list of all products |
`GET /products/:id` | returns the product with the given id |
`POST /products` | creates a single product based on the provided data |
`DELETE /products/:id` | removes the product with the given id |

| resource | description                    |
-----------|--------------------------------|
`POST /auth/register` | create new user account        |
`POST /auth/login` | returns email and access token |

### Client

Angular application for users. <br>

#### Modules

- Articles
- Customer
- Faq
- Layout
- Notification
- Order
- Producer
- Review
- Shopping-card

#### REST API responses

Api example responses for the client
<br>

Successfully response

```json
{
  "products": [
    {
      "id": 5,
      "name": "Solarland Solar Panel 60W 12V - SLP060-12U",
      "shortDescription": "<p>example description as HTML</p>",
      "description": "<p>example description as HTML</p>",
      "defaultPrice": "139.99",
      "promotionPrice": "120.99",
      "isAvailable": true,
      "category": "solar-panels",
      "quantity": 53,
      "producer": "Sp.zoo Companies",
      "createdAt": "2022-01-16T14:29:24.000Z",
      "expectedDeliveryTime": 4,
      "refNumber": "FAFA0781B",
      "dataSheet": [
        {
          "key": "Peak Power (Pmpp)",
          "value": "60 W"
        },
        {
          "key": "Peak Power Voltage (Vmpp)",
          "value": "17.2 V"
        },
        {
          "key": "Peak Power Current (Impp)",
          "value": "3.49 A"
        },
        {
          "key": "Open Circuit Voltage (Voc)",
          "value": "21.6 V"
        },
        {
          "key": "Short Circuit Current:",
          "value": "3.86 A"
        },
        {
          "key": "Weight",
          "value": "12.46 lbs."
        },
        {
          "key": "Cable length",
          "value": "No Cable"
        },
        {
          "key": "Length",
          "value": "25.75 in"
        },
        {
          "key": "Width",
          "value": "26.57 in"
        },
        {
          "key": "Depth incl. jbox",
          "value": "1.18 in"
        },
        {
          "key": "Nominal Voltage",
          "value": "12 V"
        },
        {
          "key": "Limited Warranty",
          "value": "25 year"
        }
      ],
      "views": 0,
      "isPublished": true,
      "shippingMethods": [
        "courier-consignment",
        "collection-in-person"
      ]
    },
    {
      "id": 7,
      "name": "Enphase IQ 7A Microinverter 295-460W 60-72 cell - IQ7A-72-2-US",
      "shortDescription": "<p>example description as HTML</p>",
      "description": "<p>example description as HTML</p>",
      "defaultPrice": "850.49",
      "promotionPrice": "0.00",
      "isAvailable": true,
      "category": "solar-inverters",
      "quantity": 3,
      "producer": "Sp.zoo Enphase",
      "createdAt": "2022-01-17T20:28:17.000Z",
      "expectedDeliveryTime": 3,
      "refNumber": "FA80DAWD",
      "dataSheet": [
        {
          "key": "Commonly used module pairings¹",
          "value": "295 W–460 W +"
        },
        {
          "key": "Module compatibility",
          "value": "60-cell and 72-cell PV modules"
        },
        {
          "key": "Maximum input DC voltage",
          "value": "58 V"
        },
        {
          "key": "Maximum input DC current",
          "value": "10.2 A"
        },
        {
          "key": "Peak power tracking voltage",
          "value": "38 V–43 V"
        },
        {
          "key": "Operating range",
          "value": "18 V–58 V"
        },
        {
          "key": "Min/Max start voltage",
          "value": "30 V / 58 V"
        },
        {
          "key": "Max DC short circuit current (module Isc)",
          "value": "15 A"
        }
      ],
      "views": 0,
      "isPublished": true,
      "shippingMethods": [
        "courier-consignment",
        "collection-in-person",
        "inpost-parcel"
      ]
    },
    {
      "id": 10,
      "name": "General Specialties Side-Of-Pole Solar Mount for 2X 36-Cell Panel - SOP-S-A",
      "shortDescription": "<p>example description as HTML</p>",
      "description": "<p>example description as HTML</p>",
      "defaultPrice": "1099.99",
      "promotionPrice": "850.00",
      "isAvailable": true,
      "category": "mounting-system",
      "quantity": 10,
      "producer": "Sp.zoo General Specialties",
      "createdAt": "2022-01-18T07:33:41.000Z",
      "expectedDeliveryTime": 4,
      "refNumber": "DAJ1341ONJ",
      "dataSheet": [
        {
          "key": "height X width",
          "value": "26.5\" X 59.5\" "
        }
      ],
      "views": 0,
      "isPublished": true,
      "shippingMethods": [
        "courier-consignment",
        "collection-in-person"
      ]
    }
  ]
}
```
