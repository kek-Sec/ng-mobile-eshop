import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: `
<!--Admin page
CAN perform all crud operations on orders and mobilephones-->
<div class="wrapper" style="display:flex;justify-content:center;margin-top:5vh">
    <div class="col-md-5">
        <div class="form-block">
            <h2>Add Order</h2>
            <div class="form">
                <form action="/action_page.php">
                    <div class="form-group">
                        <input [(ngModel)]="order.order_id" style="margin-bottom:0.5vh;" type="number"
                            class="form-control" id="order_id" placeholder="Enter order_id" name="order_id" />
                    </div>
                    <div class="form-group">
                        <input [(ngModel)]="order.product_id" style="margin-bottom:0.5vh;" type="number"
                            class="form-control" id="product_id" placeholder="Enter product_id" name="product_id" />
                    </div>
                    <div class="form-group">
                        <input [(ngModel)]="order.user_id" style="margin-bottom:0.5vh;" type="number"
                            class="form-control" id="user_id" placeholder="Enter user_id" name="user_id" />
                    </div>
                    <div class="form-group">
                        <input [(ngModel)]="order.date" style="margin-bottom:0.5vh;" type="text" class="form-control"
                            id="date" placeholder="Enter date" name="date" />
                    </div>
                    <button type="submit" class="btn btn-default custom-btn">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>
<!--
        {
        "product_id": 1,
        "price": 321,
        "quantity": 423,
        "photoURL": "https://via.placeholder.com/500.png",
        "model": "Xioami note 85100",
        "screenSize": "438x432",
        "cpu": "quad core",
        "ram": "5gb",
        "camera": "8 mega pixel",
        "battery": "43298mah",
        "sar": "432.423"
    },
-->
<div class="wrapper" style="display:flex;justify-content:center;margin-top:5vh">
    <div class="col-md-5">
        <div class="form-block">
            <h2>Add Phone</h2>
            <div class="form">
                <form action="/action_page.php">
                    <div class="form-group">
                        <input [(ngModel)]="phone.product_id" style="margin-bottom:0.5vh;" type="number"
                            class="form-control" id="product_id" placeholder="Enter product_id" name="product_id" />
                    </div>
                    <div class="form-group">
                        <input [(ngModel)]="phone.price" style="margin-bottom:0.5vh;" type="number"
                            class="form-control" id="price" placeholder="Enter price" name="price" />
                    </div>
                    <div class="form-group">
                        <input [(ngModel)]="phone.quantity" style="margin-bottom:0.5vh;" type="number"
                            class="form-control" id="quantity" placeholder="Enter quantity" name="quantity" />
                    </div>
                    <div class="form-group">
                        <input [(ngModel)]="phone.photoURL" style="margin-bottom:0.5vh;" type="text"
                            class="form-control" id="photoURL" placeholder="Enter photoURL" name="photoURL" />
                    </div>
                    <div class="form-group">
                        <input [(ngModel)]="phone.model" style="margin-bottom:0.5vh;" type="text"
                            class="form-control" id="model" placeholder="Enter model" name="model" />
                    </div>
                    <div class="form-group">
                        <input [(ngModel)]="phone.screenSize" style="margin-bottom:0.5vh;" type="text"
                            class="form-control" id="screenSize" placeholder="Enter screenSize" name="screenSize" />
                    </div>
                    <div class="form-group">
                        <input [(ngModel)]="phone.cpu" style="margin-bottom:0.5vh;" type="text"
                            class="form-control" id="cpu" placeholder="Enter cpu" name="cpu" />
                    </div>
                    <div class="form-group">
                        <input [(ngModel)]="phone.ram" style="margin-bottom:0.5vh;" type="text"
                            class="form-control" id="ram" placeholder="Enter ram" name="ram" />
                    </div>
                    <div class="form-group">
                        <input [(ngModel)]="phone.camera" style="margin-bottom:0.5vh;" type="text"
                            class="form-control" id="camera" placeholder="Enter camera" name="camera" />
                    </div>
                    <div class="form-group">
                        <input [(ngModel)]="phone.battery" style="margin-bottom:0.5vh;" type="text"
                            class="form-control" id="battery" placeholder="Enter battery" name="battery" />
                    </div>
                    <div class="form-group">
                        <input [(ngModel)]="phone.sar" style="margin-bottom:0.5vh;" type="text"
                            class="form-control" id="sar" placeholder="Enter sar" name="sar" />
                    </div>
                    <button type="submit" class="btn btn-default custom-btn">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>
  `,
  styles: [
    `
      .header-content {
        padding: 50px 0;
      }
      .header-title {
        color: #88c724;
        display: block;
        font-size: 48px;
        font-weight: 600;
        line-height: 50px;
        text-transform: uppercase;
      }
      .header-motto {
        color: #88c724;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
      }
      .form-block {
        background: #f9f9f9 none repeat scroll 0 0;
        border-radius: 1px;
        box-shadow: 2px 3px 8px #a7a7a7;
        color: gray;
        display: block;
        min-height: 250px;
        overflow: hidden;
        padding: 30px;
      }
      .form-block h2 {
        border-bottom: 1px solid #88c724;
        color: #88c724;
        display: block;
        font-size: 24px;
        font-weight: 300;
        line-height: 28px;
        margin-bottom: 20px;
        padding-bottom: 8px;
      }
      .form .form-control {
        border-radius: 0;
        color: #999;
        height: 42px;
      }
      .form-control:focus {
        border-color: #88c724;
        box-shadow: none;
      }
      .custom-btn:hover,
      .custom-btn {
        background-color: #88c724;
        border-color: #88c724;
        color: #fff;
        font-size: 20px;
        height: 40px;
        width: 100%;
        font-weight: 500;
      }
    `,
  ],
})
export class AdminComponent implements OnInit {

  phone:any;
  order:any;
  constructor() { }

  ngOnInit(): void {
  }

}
