import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerDefComponent} from './customer-def/customer-def.component';
import {CusListComponent} from './customer-def/items/cus-list/cus-list.component';
import {CusDetailsComponent} from './customer-def/items/cus-details/cus-details.component';

const routes: Routes = [
  {path:'', redirectTo:'/customer/default-customer/list', pathMatch:'full'},
  {path:'default-customer', component:CustomerDefComponent,children:[
      {path:'list', component:CusListComponent},
      {path:'detail/:id', component:CusDetailsComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
