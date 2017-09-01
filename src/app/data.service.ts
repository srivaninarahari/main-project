import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import {character} from './character.model'
@Injectable()
export class DataService {

  private url: string = "https://gateway.marvel.com:443/v1/public/characters?apikey=1635e0378c3ce1a282d56d0be3b5a324";
users: any[]
  constructor(private http:Http) { }
  /**Get the character list from the array. */
  getCharacterList(): Observable<character[]> {
    this.http.get('this.url').subscribe(Response=>{
      console.log(Response);
   });
   return this.http.get('https://gateway.marvel.com:443/v1/public/characters?apikey=1635e0378c3ce1a282d56d0be3b5a324').map(response=>response.json() as character[]);
    }
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  };

  private handleErrors(error: Response) {
    return Observable.throw(error);
  };

}
