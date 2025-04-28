import { Injectable } from '@angular/core';
import {map, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {PhotosDto} from '../dto/PhtoosDto';
import {Photos} from '../dto/Photos';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  baseUrl = environment.url;

  constructor(private _http:HttpClient) {}

  findAllPhotos():Observable<PhotosDto[]>{
    return this._http.get<Photos[]>(`${this.baseUrl}/photos`).pipe(
      map((data: Photos[]) => {
        return data.map((item: Photos) => {
          return new PhotosDto(item.albumId, item.id, item.title, item.url, item.thumbnailUrl);
        });
      })
    );
  }

  findAllComments():Observable<any>{
    return this._http.get(`${this.baseUrl}/comments`);
  }

}
