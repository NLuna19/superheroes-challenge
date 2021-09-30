import { Component } from '@angular/core';
import { SuperherosService } from './services/superheros.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'superheroesAPP';
  heroe:any = Object;
  image:any = Object;
  powerstats:any = Object;
  appearance:any = Object;
  biography:any = Object;

  constructor( private superheroes: SuperherosService ) {
    this.superheroes.getHeroe(289).then(resp => {
        console.log(resp.data);
        this.heroe=resp.data;
    })

    this.superheroes.getBiography(289).then(resp => {
      //console.log(resp.data);
      this.biography=resp.data;
    })

    this.superheroes.getStats(289).then(resp => {
        this.powerstats=resp.data;
    })

    this.superheroes.getAppearance(289).then(resp => {
        this.appearance=resp.data;
    })
    
    this.superheroes.getImage(289).then(resp => {
        this.image=resp.data;
    })
  }


}
