import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav-header></nav-header>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
}

/**
 * Application entry point.
 */
