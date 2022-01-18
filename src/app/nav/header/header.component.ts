import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'nav-header',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#"> Brand </a>

      <button class="navbar-toggler" type="button" (click)="toggleNavbar()">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" [ngClass]="{ show: navbarOpen }">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" routerLink="auth/register" href="#">Register</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="auth/login" href="#">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="orders" href="#">My Orders</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="store" href="#">Store</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="contact" href="#">Contact</a>
          </li>
          <li *ngIf="logged_in" class="nav-item">
            <a class="nav-link" (click)="logout()" href="#">Log out</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: [],
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;
  logged_in: boolean = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }


  constructor() { }


  logout() {
    AppComponent.logged_in = false;
    this.logged_in = false;
  }

  ngOnInit(): void {
    //check every second if the user is logged in
    setInterval(() => {
      if (AppComponent.logged_in) {
        this.logged_in = true;
      }
    }, 1000);
  }
}
