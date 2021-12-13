import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private auth: AuthenticationService, public router: Router ) {
    if(this.auth.getStateLogin()){
      
    }
    else{
      this.router.navigateByUrl('/login')
    }
  }


  ngOnInit(): void {
  }

}
