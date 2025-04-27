import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  baseUrl = environment.url;

  constructor(private _http:HttpClient) {}

  findAllPhotos():Observable<any>{
    return this._http.get(`${this.baseUrl}/photos`);
  }

  findAllComments():Observable<any>{
    return this._http.get(`${this.baseUrl}/comments`);
  }

}
