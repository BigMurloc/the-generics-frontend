import {Component, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  totalPrice = 0;
  products!: Product[];


  constructor() {
  }

  ngOnInit(): void {
    this.products = [
      {
        name: 'T-Shirt',
        price: 14.99,
        img: '/assets/images/Shirt.png',
        quantity: 0
      },
      {
        name: 'Album 3',
        price: 10.99,
        img: '/assets/images/Album 3.png',
        quantity: 0
      },
      {
        name: 'Album 2',
        price: 12.99,
        img: '/assets/images/Album 2.png',
        quantity: 0
      },
      {
        name: 'Album 1',
        price: 20.99,
        img: '/assets/images/Album 1.png',
        quantity: 0
      }
    ];
  }

  calculateTotalPrice(e: any, productName: string): void {
    let currentPrice = 0;
    for (const product of this.products) {
      if (product.name === productName) {
        product.quantity = e.data;
      }
      currentPrice += product.price * product.quantity;
    }
    this.totalPrice = currentPrice;
  }

}
