import { Component } from '@angular/core';
import { SuperherosService } from './services/superheros.service';

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

  constructor( private superheroes: SuperherosService ) {
    this.superheroes.getHeroe(289).subscribe((resp:any) => {
        console.log(resp);
        this.heroe=resp;
    })
    this.superheroes.getImage(289).subscribe((resp:any) => {
        this.image=resp;
    })
    this.superheroes.getStats(289).subscribe((resp:any) => {
        this.powerstats=resp;
    })
    this.superheroes.getAppearance(289).subscribe((resp:any) => {
        this.appearance=resp;
    })

  }


}
