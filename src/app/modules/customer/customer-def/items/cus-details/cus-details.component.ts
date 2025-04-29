import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {TodosService} from '../../../../../services/todos.service';
import {NgIf} from '@angular/common';
import {CusListComponent} from '../cus-list/cus-list.component';

@Component({
  selector: 'app-cus-details',
  imports: [
    RouterLink,
    NgIf,
    CusListComponent
  ],
  templateUrl: './cus-details.component.html',
  styleUrl: './cus-details.component.scss'
})
export class CusDetailsComponent implements OnInit{
  customerId:any=undefined;
  selectedCustomer:any=undefined;
  constructor( private _activatedRoute: ActivatedRoute, private _todosService:TodosService){}
  ngOnInit() {
    this.customerId =  this._activatedRoute.snapshot.params['id'];
    this.loadCustomerDetails(this.customerId);
  }
  loadCustomerDetails(customerId:any){
   this._todosService.getTodoData(customerId).subscribe(
     response => {
        this.selectedCustomer= response;
        console.log(this.selectedCustomer);
     }
   )

  }
}
