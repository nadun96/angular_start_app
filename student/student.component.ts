import {Component} from '@angular/core';
import {HighLightDirective} from './directive/HighLightDirective';

@Component({
  selector: 'app-student',
  template: `<h2 appHighlight="appHighLight"> HI My Name is : {{ myName }}</h2>`,
  imports: [
    HighLightDirective
  ],
  // styles: [`h2 {
  //   color: blue
  // }`]
})
export class StudentComponent{
  myName : string = 'John Doe';
}
