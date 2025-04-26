import { Component } from '@angular/core';
import {SearchBarTemplateComponent} from '../search-bar-template/search-bar-template.component';

@Component({
  selector: 'app-service',
  imports: [
    SearchBarTemplateComponent
  ],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {

}
