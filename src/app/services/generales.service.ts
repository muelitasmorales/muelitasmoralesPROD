import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralesService {

  constructor(private _http: HttpClient) { }

  // se usa para hacer ping a la página cada 40 min y que no entre en sleep de Heroku
  activarHeroku():void {
    const URL = "http://www.muelitasmorales.com/";
    this._http.get(URL).subscribe(()=> console.log('Habilitó la página'));
  }

  enviarCorreoContactenos():Observable<Object> {
    const URL = "http://www.muelitasmorales.com/";
    return this._http.get(URL);
  }
}
