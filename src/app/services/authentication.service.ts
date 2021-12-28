import { LoginComponent } from './../components/login/login.component';
import { Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import axios from 'axios';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _url = 'http://challenge-react.alkemy.org/';
  private logueado = false;

  constructor() { }
 
  async loginUser(email:string, password:string) {
    //localStorage.removeItem('search');
    
    const resp = await axios.post(this._url, {email:email, password:password})
    .then( resp =>
        resp.data    
    )
    .catch( err => {
        if (err.response){
          Swal.fire(err.response.status+' '+err.response.statusText ,err.response.data.error, 'error')
          null
        }
        else if (err.request) {
          console.log(err);
          null
        } else{
          console.log('err');
          null
        }
      }
    );
    return resp;

  }

  verify() {
    
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