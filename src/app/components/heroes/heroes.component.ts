import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SuperheroesService } from 'src/app/services/superheroes.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

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
    
  constructor( private superheroes: SuperheroesService, private auth: AuthenticationService, private localStorage: LocalStorageService, public router: Router ) {
    if(this.auth.getStateLogin()){
      if(localStorage.getLastSearch() === null){
        localStorage.setLastSearch('');
      }else{ 
        this.superheroes.search(localStorage.getLastSearch()).then(resp => this.result = resp.results);
      }
    }
    else{
      this.router.navigateByUrl('/login')
    }
  }

  ngOnInit(): void {
  }

  get heroesService(): SuperheroesService{
    return this.superheroes as SuperheroesService;
  }
  
  aplySearch(){
    this.superheroes.search(this.search.value.parametro).then(resp => this.result = resp.results);
    this.localStorage.setLastSearch(this.search.value.parametro);
  }

  // isSelect(id:number):boolean{
  //   return this.superheroes.getSelection().includes(id);     
  // }

  // selectOne(id:number):void{
  //   this.superheroes.addSelection(id);
  // }

  // removeOne(id:number):void{
  //   this.superheroes.removeSelection(id);
  // }
  
  // seeProfile(indice:number){
  //   this.focus = indice
  // }

}
