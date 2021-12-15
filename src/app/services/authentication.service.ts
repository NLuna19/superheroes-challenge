import { LoginComponent } from './../components/login/login.component';
import { Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { LoginCredentials } from "../components/login/login-credentials";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _url = 'http://challenge-react.alkemy.org/';
  private logueado = false;

  constructor() { }
 
  loginUser(credential: LoginCredentials) {
    const email = credential.email;
    const password = credential.password;

    return axios.post(this._url, {email:email, password:password})
    .then( resp => resp.data )
    .catch(error => {
      error
      }
    );
    localStorage.removeItem('search');
  }

  getStateLogin(){
    // console.log(this.logueado);
    return this.logueado
  }

  setStateLogin(state:boolean){
    this.logueado = state;   
    console.log('se cambio StateLogin: '+ this.logueado);  
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