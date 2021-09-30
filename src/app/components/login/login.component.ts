import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  //styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public token!: Object;

  formLogin = new FormGroup({
    useremail : new FormControl('', Validators.required),
    userpassword: new FormControl('', Validators.required)
  });
  

  constructor( private auth: AuthenticationService ) { 
  }

  ngOnInit(): void {
  }

  login(){
    let email = this.formLogin.value.useremail;
    let password = this.formLogin.value.userpassword;

    this.auth.loginUser(email, password)
      .then(resp => {
        this.token=resp;
        console.log(this.token)
    })
    .catch(error => {
      console.log(error)
    }
  );

  }

  //email: challenge@alkemy.org
  //password: react
  
  
}
