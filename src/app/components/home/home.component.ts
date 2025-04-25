import { Component } from '@angular/core';
import {NgForOf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  customers: any[] = [
    {
      id:'C001',
      name:'John Doe',
      salary: 50000,
      address: '123 Main St, Heavyville',
      avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNtLnYEqvhKKHET_JzfYOv5hZNV1cngGuY_A&s'
    },
    {
      id:'C002',
      name:'Jane Doe',
      salary: 40000,
      address: '123 Main St, Cityville',
      avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNtLnYEqvhKKHET_JzfYOv5hZNV1cngGuY_A&s'
    },
    {
      id:'C003',
      name:'John DPow',
      salary: 30000,
      address: '123 Main St, Smallville',
      avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4UC_j6CYVq-A-Qsbz0hvlwM2MHaHw8RvDvQ&s'
    },
  ]

}
