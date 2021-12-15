import { Component, Input, OnInit } from '@angular/core';
import { SuperheroesService } from 'src/app/services/superheroes.service';

@Component({
  selector: 'app-card-heroe',
  templateUrl: './card-heroe.component.html',
  styleUrls: ['./card-heroe.component.css']
})
export class CardHeroeComponent implements OnInit {
  @Input() heroe:any;
  @Input() index!:number;

  focus: number | undefined;

  constructor(private superheroes: SuperheroesService) { }

  ngOnInit(): void {
  }

  isSelect(id:number):boolean{
    return this.superheroes.getSelection().includes(id);     
  }

  selectOne(id:number):void{
    this.superheroes.addSelection(id);
  }

  removeOne(id:number):void{
    this.superheroes.removeSelection(id);
  }

  seeProfile(indice:number){
    this.focus = indice
  }

}
