import { Component, OnInit } from '@angular/core';
import { SuperheroesService } from 'src/app/services/superheroes.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CookieService } from 'src/app/services/cookies.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  select: number | undefined;
  result: Array<any> | undefined;
  idsTeam: any;
  focus: number | undefined;

  constructor( 
    private superheroes: SuperheroesService, private auth: AuthenticationService, 
    private router: Router, private cookie:CookieService
  ){ 
    if((this.cookie.get('session') == 'true')){
      this.auth.setStateLogin(true); 
      this.getHeroes() //revisar
    }
    else{
      this.router.navigateByUrl('/login')
    }
    
  }

  ngOnInit(): void {
  }

  getAuth(){
    return this.auth
  }

  getTeam():Array<number>{
    return this.superheroes.getSelection(); 
  }

  async getHeroes(){
    
    this.result = [];

    for(let i = 0; i < this.getTeam().length; i++) {
       
      this.superheroes.getHeroe(this.getTeam()[i])
      .then(resp => {

        this.result?.push(resp)
      })
    }
  }

  async removeOne(id:number):Promise<void>{
    this.superheroes.removeSelection(id);
    this.getHeroes()
  }

  getGrlIntelligence():number{
    return this.superheroes.GrlIntelligence;
  }

  getGrlStrength():number{
    return this.superheroes.GrlStrength;
  }

  getGrlSpeed():number{
    return this.superheroes.GrlSpeed;
  }

  getGrlDurability():number{
    return this.superheroes.GrlDurability;
  }

  getGrlPower():number{
    return this.superheroes.GrlPower;
  }

  getGrlCombat():number{
    return this.superheroes.GrlCombat;
  }
  
}


