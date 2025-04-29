import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-customer-def',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './customer-def.component.html',
  styleUrl: './customer-def.component.scss'
})
export class CustomerDefComponent {

}
