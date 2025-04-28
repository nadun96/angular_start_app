import {Component, OnInit} from '@angular/core';
import {debounceTime, Observable} from 'rxjs';
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
   /* this.searchText.valueChanges.subscribe(
     ()=>{
     console.log('searchText', this.searchText.value);
     }
   )*/
    this.searchText.valueChanges.pipe(
      debounceTime(3000)
    ).subscribe((value)=>console.log(value))
  }
}
