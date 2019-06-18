import { Component } from '@angular/core';
import { Noticia } from '../../interfaces/noticias.interface';

import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent {

  mostarDetalle = false;
  noticias: Noticia[] = [];
  noticia: Noticia;
  cargando = false;

  constructor(private ns: NoticiasService) {
    this.cargarNoticias();
  }

  mostrarDetalle(index) {
    this.cargando = true;
    this.mostarDetalle = !this.mostarDetalle;
    this.noticia = this.noticias[index];
    this.cargando = false;
  }

  private cargarNoticias() {
    this.cargando = true;
    this.ns.consultarNoticias().subscribe(noticias => {
      this.noticias = Object.keys(noticias).map(function (_noticias) {
        const noticia = noticias[_noticias];
        return noticia;
      });
      this.cargando = false;
    });
  }
}
