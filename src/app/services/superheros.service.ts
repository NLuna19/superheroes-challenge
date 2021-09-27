import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class SuperherosService {
  _url:string = "https://www.superheroapi.com/api.php/4270613199658906/";
  constructor(private http: HttpClient) { }

  getHeroe(id:number){
    return this.http.get(this._url+id)
  }
  
  getImage(id:number){
    return this.http.get(this._url+id+'/image')
  }

  getStats(id:number){
    return this.http.get(this._url+id+'/powerstats')
  }

  getAppearance(id:number){
    return this.http.get(this._url+id+'/appearance')
  }

}

//https://www.superheroapi.com/api.php/4270613199658906/289