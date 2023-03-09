import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeBeforeLoginComponent } from './home-before-login/home-before-login.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    HomeBeforeLoginComponent,
    CartComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent
  ]
})
export class SharedModule { }
