import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  options:string[];
  ventana_selected:string;
  showFiller = false;

  constructor() { 
   this.options = ["Team", "Buscar", "Info"];
   this.ventana_selected = this.options[0];
  }

  ngOnInit(): void {
    
  }

  cambiarActive_menu(id:number){
    this.ventana_selected = this.options[id];
  }

}
