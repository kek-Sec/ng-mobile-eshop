import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-footer',
  template: `
    <div id="footer">
      <div class="container">
        <p class="footer-block">
          Mobile-eshop , e to the shop of your dreams.
        </p>
      </div>
    </div>
  `,
  styles: [
    `
      #footer {
        bottom: 0;
        width: 100%;
        position: absolute;
        height: 60px;
        background-color: #f5f5f5;
        .footer-block {
          margin: 20px 0;
        }
      }
    `,
  ],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
