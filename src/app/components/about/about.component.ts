import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit{
  // Observable Demonstration
  myObserver= new Observable((observer) => {
    console.log('Observable Started');
    setTimeout(()=> observer.next(1), 1000);
    setTimeout(()=> observer.next(2), 2000);
    setTimeout(()=> observer.next(3), 3000);
    setTimeout(()=> observer.next(4), 4000);
    setTimeout(()=> observer.next(5), 5000);
    setTimeout(()=> observer.next(6), 6000);
    console.log('Observable Ended');
  })
  ngOnInit() {
    this.myObserver.subscribe(
      {
        next:(data)=> console.log(data),
        error:(error)=> console.log(error),
        complete:()=> console.log('Completed'),
      }
    )
    console.log('AboutComponent initialized');
  }
}
