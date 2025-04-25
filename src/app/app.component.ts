import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent{
  title = 'NADUN';
  width = 500;
  fontSize = "30px";
  isActive = true;
  imageLink :string = "https://cdn.pixabay.com/photo/2025/04/08/00/45/pattern-9520292_640.jpg";
}
