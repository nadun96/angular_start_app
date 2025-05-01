import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenManagerService {

  constructor() { }

  public setToken(key:any,token:any){
    localStorage.setItem(key, token);
  }
  public exists(key:any){
    let token = localStorage.getItem(key);
    if (token){
      return true;
    }
    return false;
  }
}
