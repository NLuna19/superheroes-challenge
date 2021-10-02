import { Component, OnInit } from '@angular/core';
import { SuperheroesService } from 'src/app/services/superheroes.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  select:number | undefined;
  result: Array<any> | undefined;
  idsTeam: any;
  focus: number | undefined;
  
  constructor( private superheroes: SuperheroesService ) { 
    this.getHeroes()
  }

  ngOnInit(): void {
  }

  getTeam():Array<number>{
    return this.superheroes.getSelection(); 
  }

  getHeroes(){
    const idsTeam:Array<number> = this.getTeam();
    this.result = [];
    for (let i = 0; i < idsTeam.length; i++) {
      this.superheroes.getHeroe(idsTeam[i])
      .then(resp => {
        this.result?.push(resp)
      })
    }
  }

  removeOne(id:number):void{
    this.superheroes.removeSelection(id);
    this.getHeroes()
  }

  seeProfile(indice:number){
    this.focus = indice
  }

}
