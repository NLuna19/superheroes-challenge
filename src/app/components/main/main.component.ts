import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor( private auth: AuthenticationService, private router: Router  ) { 

  }

  ngOnInit(): void {
  }

  validate(){
    this.auth.getStateLogin() ? this.router.navigateByUrl('/heroes') 
      : this.router.navigateByUrl('/login')
  }
  

}
