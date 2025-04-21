import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {WorksComponent} from './works/works.component';
import {AboutComponent} from './about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactComponent, WorksComponent,AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'NADUN';
  width="300px";
  imageLink='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zwhySGCEBxRRFYIcQgvOLOpRGqrT3d7Qng&s';
}
