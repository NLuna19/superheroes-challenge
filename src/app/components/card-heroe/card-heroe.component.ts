import { Component, Input, OnInit } from '@angular/core';
import { SuperheroesService } from 'src/app/services/superheroes.service';
import Swal from 'sweetalert2';

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
    
    Swal.fire({
      icon: 'success',
      title: 'Heroe agregado al equipo',
      showConfirmButton: false,
      timer: 1500
    })
  }

  removeOne(id:number):void{
    this.superheroes.removeSelection(id);

    Swal.fire({
      icon: 'error',
      title: 'Heroe removido del equipo',
      showConfirmButton: false,
      timer: 1500
    })
  }

  seeProfile(indice:number){
    this.focus = indice
  }

}
