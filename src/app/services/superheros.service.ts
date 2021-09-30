import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class SuperherosService {
  _url:string = "https://www.superheroapi.com/api.php/4270613199658906/";
  
  constructor() { }

  getHeroe(id:number){  
    return axios.get(this._url+id)  
  }
    
  getStats(id:number){  
    return axios.get(this._url+id+'/powerstats')  
  }

  getBiography(id:number){  
    return axios.get(this._url+id+'/biography')  
  }

  getAppearance(id:number){  
    return axios.get(this._url+id+'/appearance')
  }

  getWork(id:number){  
    return axios.get(this._url+id+'/work')  
  }

  getConnections(id:number){
      return axios.get(this._url+id+'/connections')
  }

  getImage(id:number){  
    return axios.get(this._url+id+'/image')
  }

  getByName(id:number){  
    return axios.get(this._url+'/search/name')
  }
  
}

//https://www.superheroapi.com/api.php/4270613199658906/289