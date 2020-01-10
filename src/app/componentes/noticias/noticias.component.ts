import { Component } from '@angular/core';

import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent {

  mostarDetalle = false;
  noticias = [];
  noticia: any;

  constructor(private noticiaService: NoticiasService) {
    this.cargarNoticias();
  }

  mostrarDetalle(index) {
    this.mostarDetalle = !this.mostarDetalle;
    this.noticia = this.noticias[index];
  }

  private cargarNoticias() {
    this.noticiaService.consultarNoticias().subscribe(noticias => {
      this.noticias = Object.keys(noticias).map(function (_noticias) {
        const noticia = noticias[_noticias];
        return noticia;
      });
    });
  }
}
