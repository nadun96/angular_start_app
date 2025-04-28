import {Component, OnInit} from '@angular/core';
import {debounceTime, Observable, Subject} from 'rxjs';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-about',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit{

  searchText = new FormControl();
  ngOnInit() {
    const subject = new Subject<string>();
    subject.subscribe((value)=>{console.log(`Subscriber 1 ${value}`)})
    subject.next("Text 1");
    subject.next("Text 2");
    subject.next("Text 3");
    subject.subscribe((value) => {console.log(`Subscriber 2 ${value}`)})
    subject.next("Text 4");
  }
}
