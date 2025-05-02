import {Component} from '@angular/core';

@Component({
  selector: 'app-student',
  template: `<h2> HI My Name is : {{myName}}</h2>`,
  styles: [`h2{color:blue}`]
})
export class StudentComponent{
  myName : string = 'John Doe';
}
