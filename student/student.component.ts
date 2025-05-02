import {Component} from '@angular/core';
import {HighLightDirective} from './directive/HighLightDirective';
import {NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';

@Component({
  selector: 'app-student',
  template: `<h2 appHighlight="appHighLight"> HI My Name is : {{ myName }}</h2>
  <div [ngSwitch]="color">
    <p *ngSwitchCase="'red'">Red</p>
    <p *ngSwitchCase="'black'">Black</p>
    <p *ngSwitchCase="'blue'">Blue</p>
    <p *ngSwitchDefault> Not Defined</p>
  </div>`,
  imports: [
    HighLightDirective,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault
  ],
  styles: [`h2 {
    color: blue
  }`]
})
export class StudentComponent{
  myName : string = 'John Doe';
  color : string = 'Orange';
}
