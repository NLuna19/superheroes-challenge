import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CookieService } from 'src/app/services/cookies.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  //styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public ret!: Object;
  public token!: string;
  private session: boolean = false;
  private _hover:boolean = false;

  formLogin = new FormGroup({
    useremail : new FormControl('', [Validators.required, Validators.email]),
    userpassword: new FormControl('', Validators.required)
  });
  
  constructor( 
    private auth: AuthenticationService, private localStorage: LocalStorageService, 
    public router: Router, private cookie: CookieService 
  ){ 
  }

  ngOnInit(): void { 
    if(this.cookie.get('session') == 'true'){
      this.auth.setStateLogin(true); //
      this.router.navigateByUrl('/home')
    }
  }

  async login(){
    const email = this.formLogin.value.useremail;
    const password = this.formLogin.value.userpassword;

    if(this.formLogin.valid){
      await this.auth.loginUser(email, password)
      .then( resp => {
        if(resp != null){
          this.ret = resp;
          this.token = resp['token'];
          this.session = true;
          console.log(true)
        }else{
          this.session = false;
          console.log(false)
        }
      })
      .catch( error => {
        console.log(error)
      });
      
      if(!this.session){
        this.auth.setStateLogin(false);
        this.router.navigateByUrl('/login')
      }else{
        this.auth.setStateLogin(true); //
        this.router.navigateByUrl('/home')
        this.localStorage.setToken(this.token);
        this.cookie.setWithExpiryInHours('session', 'true', 2)
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
