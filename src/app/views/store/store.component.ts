import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  template: `
    <carousel style="display:flex;justify-content:center;margin-top:5vh">
      <ng-container *ngFor="let product of products">
        <slide>
          <img
            src="{{ product.photoURL }}"
            alt="Model: {{ product.model }}"
            style="width:50vh"
          />
          <div style="color:#88c724" class="carousel-caption d-none d-md-block">
            <h3>Model: {{ product.model }}</h3>
            <p>
              Price: {{ product.price }} | RAM: {{ product.RAM }} | CPU:
              {{ product.CPU }}
            </p>
          </div>
        </slide>
      </ng-container>
    </carousel>
  `,
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
      photoURL: 'https://via.placeholder.com/500.png',
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
      photoURL: 'https://via.placeholder.com/500.png',
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
      photoURL: 'https://via.placeholder.com/500.png',
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
