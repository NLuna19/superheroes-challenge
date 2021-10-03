import { SuperheroesService  } from '../../services/superheroes.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  public search = new FormGroup({
    parametro: new FormControl('', Validators.min(1))
  });
  result: any;
  focus: number | undefined;
    
  constructor( private superheroes: SuperheroesService, private auth: AuthenticationService, public router: Router ) {
    if(this.auth.getStateLogin()){
      
    }
    else{
      this.router.navigateByUrl('/login')
    }
  }

  ngOnInit(): void {
  }
  
  aplySearch(){
    this.superheroes.search(this.search.value.parametro).then(resp => this.result = resp.results)
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
