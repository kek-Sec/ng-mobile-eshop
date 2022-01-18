import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-register',
  template: `
    <section clas="main-container">
      <div
        style="display:flex; justify-content:center;margin-top:5vh"
        class="row"
      >
        <div class="col-md-7">
          <div class="form-block">
            <h2>Register</h2>
            <div class="form">
              <form action="/action_page.php">
                <div class="form-group">
                  <input
                    [(ngModel)]="user.firstName"
                    style="margin-bottom: 0.5vh;"
                    type="text"
                    class="form-control"
                    placeholder="Enter First Name"
                    name="first-name"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    [(ngModel)]="user.lastName"
                    style="margin-bottom: 0.5vh;"
                    type="text"
                    class="form-control"
                    placeholder="Enter Last Name"
                    name="last-name"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    [(ngModel)]="user.email"
                    style="margin-bottom: 0.5vh;"
                    type="email"
                    class="form-control"
                    placeholder="Enter email"
                    name="email"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    [(ngModel)]="user.password"
                    style="margin-bottom: 0.5vh;"
                    type="password"
                    class="form-control"
                    placeholder="Enter Password"
                    name="password"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    [(ngModel)]="user.repeatPassword"
                    style="margin-bottom: 0.5vh;"
                    type="password"
                    class="form-control"
                    placeholder="Enter Repeat Password"
                    name="repeat-password"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    [(ngModel)]="user.address"
                    style="margin-bottom: 0.5vh;"
                    type="text"
                    class="form-control"
                    placeholder="Enter Address"
                    name="address"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    [(ngModel)]="user.address"
                    style="margin-bottom: 0.5vh;"
                    type="text"
                    class="form-control"
                    placeholder="Enter City"
                    name="city"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    [(ngModel)]="user.postalCode"
                    style="margin-bottom: 0.5vh;"
                    type="text"
                    class="form-control"
                    placeholder="Enter Postal code"
                    name="postalcode"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    [(ngModel)]="user.mobilePhone"
                    style="margin-bottom: 1vh;"
                    type="text"
                    class="form-control"
                    placeholder="Enter Mobile phone"
                    name="mobilephone"
                    required
                  />
                </div>
                <button type="submit" (click)="openModal(template)" class="btn btn-default custom-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
     <ng-template #template>
  <div class="modal-header">
    <h4 class="modal-title pull-left">Modal</h4>
    <button type="button" class="btn-close close pull-right" aria-label="Close" (click)="modalRef?.hide()">
      <span aria-hidden="true" class="visually-hidden">&times;</span>
    </button>
  </div>
  <div class="modal-body">
   {{user | json}}
  </div>
</ng-template>
  `,
  styles: [
    `
      /*============== sticky-wrapper =============**/
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
        min-height: 460px;
        overflow: hidden;
        padding: 30px;
        margin-bottom: 20px;
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
export class RegisterComponent implements OnInit {
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {}

  //the user model
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: '',
    address: '',
    city: '',
    postalCode: '',
    mobilePhone: '',
  };

  register(){

  }
}
