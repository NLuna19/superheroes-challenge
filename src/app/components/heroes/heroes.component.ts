import { SuperheroesService  } from '../../services/superheroes.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  public search = new FormGroup({
    parametro: new FormControl('', Validators.min(1))
  });
  public result: any;

  constructor( private superheroes: SuperheroesService ) {
  }

  ngOnInit(): void {
  }
  
  async aplySearch(){
    console.log(this.search.value.parametro);
    await this.superheroes.search(this.search.value.parametro).then(resp => this.result = resp.results)
    console.log(this.result)
  }

}
