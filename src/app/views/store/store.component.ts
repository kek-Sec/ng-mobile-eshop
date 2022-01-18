import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  template: ` <p>store works!</p> `,
  styles: [],
})
export class StoreComponent implements OnInit {
  //the store will display a list of products.
  //each product has
  //productid, price, quantity, photoURL, model (π.χ. Xiaomi Mi11), screenSize, CPU, RAM,camera, battery, SAR

  //create foo data
  products = [
    {
      productID: 1,
      price: 100,
      quantity: 10,
      photoURL: '',
      model: 'Xiaomi Mi11',
      screenSize: '6.3',
      CPU: 'Snapdragon 865',
      RAM: '6GB',
      camera: '12MP',
      battery: '4000mAh',
      SAR: '5.5',
    },
    {
      productID: 2,
      price: 200,
      quantity: 20,
      photoURL: '',
      model: 'Samsung S10',
      screenSize: '6.3',
      CPU: 'Snapdragon 865',
      RAM: '6GB',
      camera: '12MP',
      battery: '4000mAh',
      SAR: '5.5',
    },
    {
      productID: 3,
      price: 300,
      quantity: 30,
      photoURL: '',
      model: 'Xiaomi Mi11',
      screenSize: '6.3',
      CPU: 'Snapdragon 865',
      RAM: '6GB',
      camera: '12MP',
      battery: '4000mAh',
      SAR: '5.5',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
