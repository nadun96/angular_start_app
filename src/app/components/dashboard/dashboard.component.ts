import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  customer= {
    name:'',
    address: '',
    salary: '',
    age:  '',
  }

  submitData() {
    console.log(this.customer);
  }

}
