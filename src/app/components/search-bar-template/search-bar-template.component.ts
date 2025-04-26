import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar-template',
  imports: [],
  templateUrl: './search-bar-template.component.html',
  styleUrl: './search-bar-template.component.scss'
})
export class SearchBarTemplateComponent {
  @Output() searchEmitter = new EventEmitter<string>();
  search(value:any){
    this.searchEmitter.emit(value);
  }
}
