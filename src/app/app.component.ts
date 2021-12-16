import { Component } from '@angular/core';
import { SuperheroesService } from './services/superheroes.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'superheroesAPP';

  constructor() { }


}
