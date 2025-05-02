import { Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AppComponent} from './app.component';
import {AboutComponent} from './components/about/about.component';
import {ServiceComponent} from './components/service/service.component';
import {ContactComponent} from './components/contact/contact.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LoginComponent} from './components/login/login.component';
import {authGuard} from './gurads/auth.guard';
import {StudentComponent} from '../../student/student.component';

export const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'service', component:ServiceComponent},
  {path:'dashboard', component:DashboardComponent,canActivate:[authGuard]},
  {path:'login', component:LoginComponent},
  {path:'student', component:StudentComponent},

  {path:'customer',
    loadChildren:()=>import('./modules/customer/customer.module')
      .then(m=>m.CustomerModule)},
  {path:'order',
    loadChildren:()=>import('./modules/order/order.module')
      .then(m=>m.OrderModule)},
  {path:'product',
    loadChildren:()=>import('./modules/product/product.module')
      .then(m=>m.ProductModule)},

  {path:'**', component:NotFoundComponent},
];
