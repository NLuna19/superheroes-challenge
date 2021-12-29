import { CookieService } from 'src/app/services/cookies.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(
    private auth: AuthenticationService, 
    private router: Router, 
    private cookie : CookieService 
  ){
    if((this.cookie.get('session') == 'true')){
      this.auth.setStateLogin(true); //
    }
    else{
      this.router.navigateByUrl('/login')
    }
  }
  
  ngOnInit(): void {}

}
