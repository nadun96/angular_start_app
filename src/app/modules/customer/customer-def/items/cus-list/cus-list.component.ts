import {Component, OnInit} from '@angular/core';
import {TodosService} from '../../../../../services/todos.service';
import {NgForOf} from '@angular/common';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-cus-list',
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './cus-list.component.html',
  styleUrl: './cus-list.component.scss'
})
export class CusListComponent implements OnInit{
  todos :any[] = [];
  constructor(private _todosService:TodosService, private _router:Router) {}

  ngOnInit() {
    this.loadAllTodos();
  }

  loadAllTodos(){
    this._todosService.getAllTodos().subscribe(
      {
      next:(data)=>this.todos = data,
      error:(err)=>console.log(err),
      complete:()=>console.log("All todos loaded"),
      }
    )
  }

  loadPage(id:any){
    this._router.navigate([`/customer/default-customer/detail/${id}`]);
  }

}
