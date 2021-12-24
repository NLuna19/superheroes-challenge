import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, Input, OnInit } from '@angular/core';
import { SuperheroesService } from 'src/app/services/superheroes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-heroe',
  templateUrl: './card-heroe.component.html',
  styleUrls: ['./card-heroe.component.css']
})
export class CardHeroeComponent implements OnInit {
  @Input() result:any;
  @Input() cols!: number;
  @Input() showPowerstats!:boolean;
  @Input() showDescription!:boolean;
  @Input() onlySelected:boolean | undefined;
  focus: number | undefined;

  constructor(private superheroes: SuperheroesService) {
    
  }

  ngOnInit(): void {
  }

  isSelect(id:number):boolean{
    return this.superheroes.getSelection().includes(id);     
  }

  async selectOne(id:number):Promise<void>{
    let ret:boolean = this.superheroes.addSelection(id);
    
    if (ret){
      Swal.fire({
        icon: 'success',
        title: 'Heroe agregado al equipo',
        showConfirmButton: false,
        timer: 1500
      })
    }else{
      Swal.fire({
        icon: 'error',
        title: 'No ha sido posible agregar el heroe al equipo',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  async removeOne(id:number):Promise<void>{
    let ret:boolean = this.superheroes.removeSelection(id);
    if(ret){
      Swal.fire({
        icon: 'success',
        title: 'Heroe removido del equipo',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  seeProfile(indice:number){
    this.focus = indice
  }

}
