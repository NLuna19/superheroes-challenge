import { Component, OnInit } from '@angular/core';
import { SuperheroesService } from 'src/app/services/superheroes.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

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

  private grl_intelligence !: number;
  private grl_strength !:number;
  private grl_speed !:number;
  private grl_durability !: number;
  private grl_power !: number;
  private grl_combat !: number;

  constructor( private superheroes: SuperheroesService, private auth: AuthenticationService, public router: Router  ) { 
    if(this.auth.getStateLogin()){
      this.getHeroes()
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

    this.grl_intelligence = 0.00;  this.grl_strength = 0.00;  this.grl_speed = 0.00;
    this.grl_durability = 0.00;  this.grl_power = 0.00;  this.grl_combat = 0.00;

    let idsTeam:Array<number> = this.getTeam();
    for(let i = 0; i < this.getTeam().length; i++) {
       
      this.superheroes.getHeroe(this.getTeam()[i])
      .then(resp => {

        this.grl_intelligence  = ( +this.grl_intelligence + +resp['powerstats']['intelligence'] );
        this.grl_strength = ( this.grl_strength + +resp['powerstats']['strength'] );
        this.grl_speed  = ( this.grl_speed + +resp['powerstats']['speed']);
        this.grl_durability  = ( this.grl_durability + +resp['powerstats']['durability']) ;
        this.grl_power = ( this.grl_power + +resp['powerstats']['power']);
        this.grl_combat = ( this.grl_combat + +resp['powerstats']['combat']);

        this.result?.push(resp)
      })
    }
  }

  async removeOne(id:number):Promise<void>{
    this.superheroes.removeSelection(id);
    this.getHeroes()
  }

  seeProfile(indice:number){
    this.focus = indice
  }

  getGrlIntelligence(){
    return this.getTeam().length > 0 ? (this.grl_intelligence / this.getTeam().length) : 0
  }

  getGrlStrength():number{
    return this.getTeam().length > 0 ? (this.grl_strength / this.getTeam().length) : 0
  }

  getGrlSpeed(){
    return this.getTeam().length > 0 ? (this.grl_speed / this.getTeam().length) : 0
  }

  getGrlDurability(){
    return this.getTeam().length > 0 ? (this.grl_durability / this.getTeam().length) : 0
  }

  getGrlPower(){
    return this.getTeam().length > 0 ? (this.grl_power / this.getTeam().length) : 0
  }

  getGrlCombat(){
    return this.getTeam().length > 0 ? (this.grl_combat / this.getTeam().length) : 0
  }
  
}


