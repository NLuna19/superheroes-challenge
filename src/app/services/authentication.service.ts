import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _url = 'http://challenge-react.alkemy.org/';
  
  constructor() { }
  
  loginUser(email:string, password:string) {
    return axios.post(this._url, {email:email, password:password})
    .then( resp => resp.data )
    .catch(error => {
      error
      }
    );
  }

  setToken(token:string){
    localStorage.setItem('accessToken',token);
  }

  getToken(){
    return localStorage.getItem('accessToken');
  }
  
  logout(){
//    localStorage.removeItem('currentUser');
    localStorage.removeItem('accessToken');
  }

  // setUser(user:any){
  //   let user_string = JSON.stringify(user);
  //   localStorage.setItem('currentUser',user_string);
  // }
  
  // getCurrentUser(){
  //   let user_string = localStorage.getItem('currentuser');
  //   if(user_string === null || user_string === undefined){
  //     return null
  //   }else{
  //     let user = JSON.parse(user_string);
  //     return user;
  //   }
  // }

}