import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  //styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public ret!: Object;
  public token!: string;
  private _hover:boolean = false;

  formLogin = new FormGroup({
    useremail : new FormControl('', [Validators.required, Validators.email]),
    userpassword: new FormControl('', Validators.required)
  });
  
  constructor( private auth: AuthenticationService, private localStorage: LocalStorageService, public router: Router ) { 
  }

  ngOnInit(): void {
    
  }

  async login(){
    const credential = this.formLogin.value;
    
    if(this.formLogin.valid){
      await this.auth.loginUser(credential)
      .then(resp => {
        this.ret = resp
        this.token = resp['token'];
      })
      .catch(error => {
        this.ret = error
      });
      if( !this.formLogin.valid || this.ret === null || this.ret === undefined){
        this.auth.setStateLogin(false);
        this.router.navigateByUrl('/login')
      }else{
        this.auth.setStateLogin(true); //
        this.router.navigateByUrl('/home')
        this.localStorage.setToken(this.token);
      }
    }else{
      
    }
  }

  get emailControl():FormControl{
    return this.formLogin.get('useremail') as FormControl;
  }

  get passwordControl():FormControl{
    return this.formLogin.get('userpassword') as FormControl;
  }

  getAuth(){
    return this.auth.getStateLogin();
  }

  onhover(){
    this._hover = true;
  }

  outhover(){
    this._hover = false;
  }

  getHover(){
    return this._hover;
  }


  //email: challenge@alkemy.org
  //password: angular

}
