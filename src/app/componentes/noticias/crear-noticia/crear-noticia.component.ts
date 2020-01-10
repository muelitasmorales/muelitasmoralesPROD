import { Component } from '@angular/core';
import { NoticiaModel } from '../../../models/noticia.model';

@Component({
  selector: 'app-crear-noticia',
  templateUrl: './crear-noticia.component.html',
  styleUrls: ['./crear-noticia.component.css']
})
export class CrearNoticiaComponent {

  public noticia: NoticiaModel = new NoticiaModel();

  constructor() { }

  obtenerBase64(event) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result); 
      this.noticia.Imagenes.push(reader.result.toString());     
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };

    
 }
}
