import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeneralesService {

  constructor(private _http: HttpClient) { }

  // se usa para hacer ping a la página cada 40 min y que no entre en sleep de Heroku
  ActivarHeroku(){
    const URL = "http://www.muelitasmorales.com/";
    this._http.get(URL).subscribe(()=> console.log('Habilitó la página'));
  }
}
