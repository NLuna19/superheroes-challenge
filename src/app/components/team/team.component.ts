import { Component, OnInit } from '@angular/core';
import { SuperheroesService } from 'src/app/services/superheroes.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
})
export class TeamComponent implements OnInit {

  constructor( private superheroes: SuperheroesService ) { 
    console.log(this.getTeam());
  }

  ngOnInit(): void {
  }

  getTeam():Array<number>{
    return this.superheroes.getSelection();
  }

}
