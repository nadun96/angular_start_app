import {Component, OnInit} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {CurrencyPipe, DatePipe, SlicePipe, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [
    ReactiveFormsModule,
    UpperCasePipe,
    DatePipe,
    CurrencyPipe,
    SlicePipe
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit{

  text = "Hi this is angular sample app";
  date = new Date();
  salary = 55000;
  name = "Nadun Udaraka";
  ngOnInit() {
    console.log(this.text);
    console.log(this.date);
    console.log(this.salary);
    console.log(this.name);
  }
}
