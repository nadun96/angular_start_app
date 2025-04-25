import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  imports: [RouterOutlet, CommonModule, FormsModule, RouterLink, RouterLinkActive],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html'
})
export class AppComponent {
  name: string = '';
}
