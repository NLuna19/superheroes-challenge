import { Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  //* Token
  setToken(token:string){
    localStorage.setItem('accessToken',token);
  }

  getToken(){
    return localStorage.getItem('accessToken');
  }

  logout(){
    //localStorage.removeItem('currentUser');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('search');
  }

  //* Search
  setLastSearch(search:string){
    localStorage.setItem('search',search);
  }

  getLastSearch(){
    return localStorage.getItem('search');
  }

}
