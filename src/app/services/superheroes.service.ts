import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class SuperheroesService {
  _url:string = "https://www.superheroapi.com/api.php/4270613199658906/";
  _selection:Array<number> = [];

  constructor() { }

  async getHeroe(id:number){  
    const resp = await axios.get(this._url + id);
    return resp.data; 
  }

  async search(text:string){  
    const resp = await axios.get(this._url + '/search/' + text);
    return resp.data;
  }
  
  addSelection(id:number){
    if (this._selection.length <= 6) {
      this._selection.push(id);
    }
  }

  getSelection(){
    return this._selection
  }

  removeSelection(id:Number){
    this._selection = this._selection.filter( 
      function(i) { 
        return i !== id 
      }
    )
  }




}


//https://www.superheroapi.com/api.php/4270613199658906/289