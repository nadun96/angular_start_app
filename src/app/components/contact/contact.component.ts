import {Component, NgIterable} from '@angular/core';
import {PhotosService} from '../../services/photos.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  photos : any[] = [];
  comments : any[] = [];

  constructor(private _photosService:PhotosService) {
  }



  getAllPhotos() {
    this._photosService.findAllPhotos().subscribe({
        next: (data) => this.photos = data,
        error: (error) => console.log(error),
        complete: () => console.log('All photos loaded'),
      }
    );
  }

  getAllComments(){
    this._photosService.findAllComments().subscribe((data) => {
      this.comments = data;
    });
  }
}



