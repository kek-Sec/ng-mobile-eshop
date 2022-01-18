import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  template: `
    <carousel style="display:flex;justify-content:center;margin-top:5vh">
      <ng-container *ngFor="let product of products">
        <slide>
          <img
            src="{{ product.photoURL }}"
            alt="Model: {{ product.model }}"
            style="width:50vh"
          />
          <div style="color:#88c724" class="carousel-caption d-none d-md-block">
            <h3>Model: {{ product.model }}</h3>
            <p>
              Price: {{ product.price }} | RAM: {{ product.ram }} | CPU:
              {{ product.cpu }}
            </p>
          </div>
        </slide>
      </ng-container>
    </carousel>
  `,
  styles: [],
})
export class StoreComponent implements OnInit {
  //the store will display a list of products.
  //each product has
  //productid, price, quantity, photoURL, model (π.χ. Xiaomi Mi11), screenSize, CPU, RAM,camera, battery, SAR

  //create foo data
  products:any;


  constructor(
    private http:HttpClient, //http client for interacting with the API
    private cdr:ChangeDetectorRef //to refresh view
    ) {

  }

  ngOnInit(): void {
    this.getMobilePhones();
  }
  /**
   * @summary - Function to get mobile phones from API 
   * @callback localhost:8080/api/v1/mobilePhone/
   */
  getMobilePhones() {
    this.http.get('http://localhost:8080/api/v1/mobilePhone/').subscribe(
      (data) => {
        this.products = data;
        this.cdr.markForCheck();
        this.cdr.detectChanges();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
