import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private auth: AuthenticationService, private localStorage: LocalStorageService) { 
  }

  ngOnInit(): void {
  }

  getAuth(){
    return this.auth.getStateLogin();
  }
  
  setAuthFalse(){
    this.auth.setStateLogin(false);
    this.localStorage.logout()
  }

}
