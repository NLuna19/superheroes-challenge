import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class SuperheroesService {
  _url:string = "https://www.superheroapi.com/api.php/4270613199658906/";
  _selection:Array<number> = [];

  private grl_intelligence :number;
  private grl_strength :number;
  private grl_speed :number;
  private grl_durability :number;
  private grl_power :number;
  private grl_combat :number;

  constructor() { 
    this.grl_intelligence = 0.00;
    this.grl_strength = 0.00;
    this.grl_speed = 0.00;
    this.grl_durability = 0.00;
    this.grl_power = 0.00;
    this.grl_combat = 0.00;
  }

  async getHeroe(id:number){  
    const resp = await axios.get(this._url + id);
    return resp.data; 
  }

  async search(text:string|null){  
    try {
      const resp = await axios.get(this._url + '/search/' + text);
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  }
  
  addSelection(id:number):boolean{
    if (this._selection.length < 6) {
      this._selection.push(id);

      this.getHeroe(id).then(resp =>{
        this.grl_intelligence = ( +this.grl_intelligence + +resp['powerstats']['intelligence']);
        this.grl_strength = ( this.grl_strength + +resp['powerstats']['strength'] );
        this.grl_speed  = ( this.grl_speed + +resp['powerstats']['speed']);
        this.grl_durability  = ( this.grl_durability + +resp['powerstats']['durability']) ;
        this.grl_power = ( this.grl_power + +resp['powerstats']['power']);
        this.grl_combat = ( this.grl_combat + +resp['powerstats']['combat']); 
      });

      return true;
    }
    else{
      return false;
    }
  }

  getSelection(){
    return this._selection
  }

  removeSelection(id:number):boolean{

    this.getHeroe(id).then(resp =>{
      this.grl_intelligence = ( +this.grl_intelligence - +resp['powerstats']['intelligence']);
      this.grl_strength = ( this.grl_strength - +resp['powerstats']['strength'] );
      this.grl_speed  = ( this.grl_speed - +resp['powerstats']['speed']);
      this.grl_durability  = ( this.grl_durability - +resp['powerstats']['durability']) ;
      this.grl_power = ( this.grl_power - +resp['powerstats']['power']);
      this.grl_combat = ( this.grl_combat - +resp['powerstats']['combat']); 
    });
    
    this._selection = this._selection.filter( 
      function(i) { 
        return i !== id 
      }
    )
    return true;
  }

  get GrlIntelligence():number{
    return this.getSelection().length > 0 ? (this.grl_intelligence / this.getSelection().length) : 0
  }

  get GrlStrength():number{
    return this.getSelection().length > 0 ? (this.grl_strength / this.getSelection().length) : 0
  }

  get GrlSpeed():number{
    return this.getSelection().length > 0 ? (this.grl_speed / this.getSelection().length) : 0
  }

  get GrlDurability():number{
    return this.getSelection().length > 0 ? (this.grl_durability / this.getSelection().length) : 0
  }

  get GrlPower():number{
    return this.getSelection().length > 0 ? (this.grl_power / this.getSelection().length) : 0
  }

  get GrlCombat():number{
    return this.getSelection().length > 0 ? (this.grl_combat / this.getSelection().length) : 0
  }

}


//https://www.superheroapi.com/api.php/4270613199658906/289