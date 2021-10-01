import {Response} from '@core/interfaces';
import {ProductResponse} from '@features/product/models';

export const allProducts: Response<ProductResponse> = {
  "links": {
    "self": "http://127.0.0.1:8000/products"
  },
  "data": [
    {
      "type": "product",
      "id": 1,
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
    },
    {
      "type": "product",
      "id": 2,
      "attributes": {
        "name": "Jeans",
        "description": "This is the blue jeans",
        "amount": 5,
        "price": 10.99,
        "created_at": "14-9-2021",
        "category": "men",
        "color": "blue",
        "material": "jeans"
      }
    },
    {
      "type": "product",
      "id": 3,
      "attributes": {
        "name": "Hoodie",
        "description": "This is the grey hoodie",
        "amount": 3,
        "price": 49.99,
        "created_at": "12-7-2021",
        "category": "men",
        "color": "gray",
        "material": "velour"
      }
    },
    {
      "type": "product",
      "id": 4,
      "attributes": {
        "name": "Dress",
        "description": "This is the black dress",
        "amount": 5,
        "price": 22.99,
        "created_at": "12-9-2021",
        "category": "women",
        "color": "black",
        "material": "velour"
      }
    }
  ]
}

