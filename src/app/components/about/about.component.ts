import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, debounceTime, Observable, Subject} from 'rxjs';
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
    // const subject = new Subject<string>();
    // subject.subscribe((value)=>{console.log(`Subscriber 1 ${value}`)})
    // subject.next("Text 1"); // ---- called as emiiting values
    // subject.next("Text 2");
    // subject.next("Text 3");
    // subject.subscribe((value) => {console.log(`Subscriber 2 ${value}`)})
    // subject.next("Text 4");

    const bsubject = new BehaviorSubject<string>("initial");
    bsubject.subscribe((value)=>{console.log(`Subscriber 1 ${value}`)})
    bsubject.next("Text 1"); // ---- called as emiiting values
    bsubject.next("Text 2");
    bsubject.next("Text 3"); // after the emmit process Subscriber two can access the last value
    bsubject.subscribe((value) => {console.log(`Subscriber 2 ${value}`)})
    bsubject.next("Text 4");

  }
}
