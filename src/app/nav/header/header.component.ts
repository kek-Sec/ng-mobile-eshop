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
            <a class="nav-link" href="#">Item 1</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Item 2</a>
          </li>
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
