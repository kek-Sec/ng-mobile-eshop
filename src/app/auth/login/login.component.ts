import { Component, OnInit } from '@angular/core';

/**
 * Login page component.
 *
 * Has the login form with the following fields:
 * - username
 * - password
 *
 */

@Component({
  selector: 'app-login',
  template: `
    <!-- Main Content -->
    <div class="wrapper" style="display:flex;justify-content:center;margin-top:5vh">
      <div class="col-md-5">
        <div class="form-block">
          <h2>Login</h2>
          <div class="form">
            <form action="/action_page.php">
              <div class="form-group">
                <input
                  [(ngModel)]="user.email"
                  style="margin-bottom:0.5vh;"
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter email"
                  name="email"
                />
              </div>
              <div class="form-group">
                <input
                  [(ngModel)]="user.password"
                  style="margin-bottom:1.5vh;"
                  type="password"
                  class="form-control"
                  id="pwd"
                  placeholder="Enter password"
                  name="pwd"
                />
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
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  //create user model
  user = {
    email: '',
    password: '',
  }
}
