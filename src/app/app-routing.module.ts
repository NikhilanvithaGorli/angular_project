import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { RegisterComponent } from './auth/register/register.component';
import { CartComponent } from './shared/cart/cart.component';
import { HomeBeforeLoginComponent } from './shared/home-before-login/home-before-login.component';
import { HomeComponent } from './shared/home/home.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { PaymentComponent } from './shared/payment/payment.component';

const routes: Routes = [
  {path:'',redirectTo:'/homebl',pathMatch:'full'},
  {path:'profile/:user',component:ProfileComponent },
  {path:'home/:user',component:HomeComponent },
  {path:'homebl',component:HomeBeforeLoginComponent },
  {path: 'login', component:LoginComponent
    // children:[
    //   {path:'overview', component:DeptOverviewComponent},
    //   {path:'contact', component:DeptContactComponent},
    // ]
  },
  {path:'cart/:user',component:CartComponent},
  {path:'register',component:RegisterComponent},
  
  {path:'payment',component:PaymentComponent},
  {path:'**',component:PageNotFoundComponent}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  