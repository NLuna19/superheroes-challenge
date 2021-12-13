import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
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
    useremail : new FormControl('', Validators.required),
    userpassword: new FormControl('', Validators.required)
  });
  
  constructor( private auth: AuthenticationService, private localStorage: LocalStorageService, public router: Router ) { 
  }

  ngOnInit(): void {
    
  }

  async login(){
    let email = this.formLogin.value.useremail;
    let password = this.formLogin.value.userpassword;
    if(this.formLogin.valid){
      await this.auth.loginUser(email, password)
      .then(resp => {
        this.ret = resp
        this.token = resp['token'];
      })
      .catch(error => {
        this.ret = error
      });
      if( !this.formLogin.valid || this.ret === null || this.ret === undefined){
        this.auth.setStateLogin(false);   
           
      }else{
        this.auth.setStateLogin(true); //
        this.router.navigateByUrl('/home')
        this.localStorage.setToken(this.token);
      }
    }else{
      
    }
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
