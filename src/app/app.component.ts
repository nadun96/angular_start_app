import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule,NgIf } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent{
  customer: any[] = [
    {
      name: 'John Doe',
      age: 30,
    },
    {
      name: 'Jane Smith',
      age: 25,
    },
    {
      name: 'Alice Johnson',
      age: 28,
    },
    {
      name: 'Bob Brown',
      age: 35,
    },
  ];
}
