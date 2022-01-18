import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdminComponent } from './views/admin/admin.component';
import { ContactComponent } from './views/contact/contact.component';
import { OrdersComponent } from './views/orders/orders.component';
import { StoreComponent } from './views/store/store.component';

const routes: Routes = [
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: 'auth/register',
    component: RegisterComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'store',
    component: StoreComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/store',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/store',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
