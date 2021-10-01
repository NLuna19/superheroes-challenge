import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  //styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public token!: Object;
  private _hover:boolean = false;

  formLogin = new FormGroup({
    useremail : new FormControl('', Validators.required),
    userpassword: new FormControl('', Validators.required)
  });
  
  

  constructor( private auth: AuthenticationService, public router: Router) { 
  }

  ngOnInit(): void {
    
  }

  login(){
    let email = this.formLogin.value.useremail;
    let password = this.formLogin.value.userpassword;
    if(email === "" || password === ""){
      
    }else{
      this.auth.loginUser(email, password)
        .then(resp => {
          this.token=resp;
          this.auth.setStateLogin(true); //
          this.router.navigateByUrl('/home')
      })
      .catch(error => {
        this.auth.setStateLogin(false);
      });  
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
  //password: react

}
