import { Component, OnInit } from '@angular/core';

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
            <a class="nav-link" href="#">My Orders</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Store</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="contact" href="#">Contact</a>
          </li>
          <!--add logout-->
        </ul>
      </div>
    </nav>
  `,
  styles: [],
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor() {}

  ngOnInit(): void {}
}
