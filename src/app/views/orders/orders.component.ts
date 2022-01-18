import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  template: ` <!--Create table to display orders-->
    <table class="table table-stripped">
      <thead style="color:#88c724">
        <tr>
          <th scope="col">#</th>
          <th scope="col">User</th>
          <th scope="col">Product</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody>
        <ng-container *ngFor="let order of orders">
          <tr>
            <td class="col-xs-3">{{ order.orderID }}</td>
            <td class="col-xs-3">{{ order.userID }}</td>
            <td class="col-xs-3">{{ order.productID }}</td>
            <td class="col-xs-6">{{ order.date }}</td>
          </tr>
        </ng-container>
      </tbody>
    </table>`,
  styles: [
    ` `,
  ],
})
export class OrdersComponent implements OnInit {
  //an order has
  //orderID, productID, userID, date.

  //create foo data
  orders = [
    {
      orderID: 1,
      productID: 1,
      userID: 1,
      date: '2020-01-01',
    },
    {
      orderID: 2,
      productID: 2,
      userID: 2,
      date: '2020-01-02',
    },
    {
      orderID: 3,
      productID: 3,
      userID: 3,
      date: '2020-01-03',
    },
    {
      orderID: 4,
      productID: 4,
      userID: 4,
      date: '2020-01-04',
    },
    {
      orderID: 5,
      productID: 5,
      userID: 5,
      date: '2020-01-05',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
