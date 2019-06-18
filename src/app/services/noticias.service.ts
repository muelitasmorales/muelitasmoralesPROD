import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private _http: HttpClient) { }

  consultarNoticias() {
    return this._http.get('assets/data/noticias.json');
  }
}
