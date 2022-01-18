import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

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
            <td class="col-xs-3">{{ order.order_id }}</td>
            <td class="col-xs-3">{{ order.user_id }}</td>
            <td class="col-xs-3">{{ order.product_id }}</td>
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
  orders:any;

  constructor(private http:HttpClient,private cdr:ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getOrders();
  }

  /**
   * @summary - function to get orders from API
   * @callback localhost:8080/api/v1/order/
   * 
   */
  getOrders() {
    this.http.get('http://localhost:8080/api/v1/order/').subscribe(
      (data) => {
        this.orders = data;
        this.cdr.markForCheck();
        this.cdr.detectChanges();
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
