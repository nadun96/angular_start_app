import {Component, Input} from '@angular/core';
import {CurrencyPipe, NgForOf, NgOptimizedImage} from '@angular/common';
@Component({
  selector: 'app-customer-template',
  imports: [CurrencyPipe, NgForOf, NgOptimizedImage],
  templateUrl: './customer-template.component.html',
  styleUrl: './customer-template.component.scss'
})
export class CustomerTemplateComponent {
@Input() customer: any;
}
