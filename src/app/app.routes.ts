import { Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AppComponent} from './app.component';
import {AboutComponent} from './components/about/about.component';
import {ServiceComponent} from './components/service/service.component';
import {ContactComponent} from './components/contact/contact.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

export const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'service', component:ServiceComponent},
  {path:'**', component:NotFoundComponent},
];
