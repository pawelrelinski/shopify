import { Component } from '@angular/core';

@Component({
  selector: 'shopify-order-card-list-element',
  templateUrl: './order-card-list-element.component.html',
  styleUrls: ['./order-card-list-element.component.scss'],
})
export class OrderCardListElementComponent {
  public readonly orders = [
    {
      orderNumber: 'WU414343',
      datePlaced: 'Jul 6, 2020',
      totalAmount: 240.99,
      products: [
        {
          name: 'Product 1',
          price: 70.0,
          status: 'Delivered Jan 25, 2021',
        },
        {
          name: 'Product 2',
          price: 29.99,
          status: 'Delivered Jan 25, 2021',
        },
        {
          name: 'Product 3',
          price: 125.0,
          status: 'Delivered Jan 25, 2021',
        },
      ],
    },
    {
      orderNumber: 'WU479452',
      datePlaced: 'Aug 29, 2021',
      totalAmount: 70.99,
      products: [
        {
          name: 'Product 1',
          price: 70.0,
          status: 'Delivered Aug 31, 2021',
        },
      ],
    },
  ];
}
