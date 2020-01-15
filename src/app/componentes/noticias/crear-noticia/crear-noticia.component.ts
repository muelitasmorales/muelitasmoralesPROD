import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NoticiaModel } from '../../../models/noticia.model';
import { AlertaModel } from '../../../models/alerta.model';

@Component({
  selector: 'app-crear-noticia',
  templateUrl: './crear-noticia.component.html',
  styleUrls: ['./crear-noticia.component.css']
})
export class CrearNoticiaComponent {

  noticia = new NoticiaModel();
  alerta = new AlertaModel();
  errores: string[] = [];

  constructor(private _modalService: NgbModal) { }

  obtenerBase64(event) :void {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result.toString());      
      this.noticia.Imagenes.push(reader.result.toString());
    };
    reader.onerror = (error) => {
      console.log("error-->"+error);      
      this.mostrarAlertas(this.alerta.Alertas.Error, `Se ha presentado un error: ${error}`);
    };
  }

  publicarNoticia(content) :void {
    this.errores = this.validar();

    if (this.errores.length > 0) {
      this._modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then();
      return;
    }
  }

  eliminar(i) :void {
    this.noticia.Imagenes.splice(i, 1);
  }

  private validar() :any[] {
    let errores = [];

    if (!this.noticia.Tema) {
      errores.push("El tema es obligatorio.");
    }

    switch (this.noticia.Tipo.toString()) {
      case "1":
        if (this.noticia.Imagenes.length == 0) {
          errores.push("Debe agregar mínimo 1 imagen.");
        }
        break;
      case "2":
        if (!this.noticia.Video) {
          errores.push("Debe agregar la URL del video.");
        }
        break;
    }

    if (!this.noticia.Descripcion) {
      errores.push("Debe agregar una descripción.");
    }else{
      if (this.noticia.Descripcion.length > 4000) {
        errores.push("La descripción debe tener menos de 4000 caracteres.");
      }
    }

    return errores;
  }

  private mostrarAlertas(tipo: string, mensaje: string): void {
    this.alerta.Tipo = tipo;
    this.alerta.Mensaje = mensaje;
    this.alerta.Mostrar = true;

    window.scrollTo(0, 0);
  }
}
