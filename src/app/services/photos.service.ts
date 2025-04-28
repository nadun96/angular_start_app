import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
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
    return this._http.get<Photos[]>(`${this.baseUrl}/photos`);
  }

  findAllComments():Observable<any>{
    return this._http.get(`${this.baseUrl}/comments`);
  }

}
