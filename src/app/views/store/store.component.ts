import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-store',
  template: `
    <carousel style="display:flex;justify-content:center;margin-top:5vh">
      <ng-container *ngFor="let product of products">
        <slide>
          <img
            (click)="openModal(template)"
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
     <ng-template #template>
  <div class="modal-header">
    <h4 class="modal-title pull-left">Modal</h4>
    <button type="button" class="btn-close close pull-right" aria-label="Close" (click)="modalRef?.hide()">
      <span aria-hidden="true" class="visually-hidden">&times;</span>
    </button>
  </div>
  <div class="modal-body">
   {{products | json}}
  </div>
</ng-template>
  `,
  styles: [],
})
export class StoreComponent implements OnInit {
  //the store will display a list of products.
  //each product has
  //productid, price, quantity, photoURL, model (π.χ. Xiaomi Mi11), screenSize, CPU, RAM,camera, battery, SAR

  //create foo data
  products: any;
  modalRef?: BsModalRef;

  constructor(
    private http: HttpClient, //http client for interacting with the API
    private cdr: ChangeDetectorRef, //to refresh view
    private modalService: BsModalService
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
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
