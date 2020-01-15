import { Component } from '@angular/core';
import { ContactenosModel } from '../../models/contactenos.model';
import { AlertaModel } from '../../models/alerta.model';
import { GeneralesService } from '../../services/generales.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent {

  contacto = new ContactenosModel();
  errores: string[] = [];
  alerta = new AlertaModel();

  constructor(private _modalService: NgbModal, private _generalSrv: GeneralesService) { }

  enviar(content) :void {
    this.errores = this.validar();

    if (this.errores.length > 0) {
      this._modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then();
      return;
    }

    this.mostrarAlertas(this.alerta.Alertas.Exito, "El correo electrónico ha sido enviado con éxito. Pronto nos pondremos en contacto con usted.");
  }

  private validar() :string[] {
    let errores: string[] = [];
    let soloLetras = /^[a-zA-Z ]/;
    let soloNumeros = /^[0-9]/;
    let correo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!this.contacto.Nombre || !soloLetras.test(this.contacto.Nombre)) {
      errores.push("El nombre es obligatorio o no tiene un foramto válido. Solo se admiten letras.");
    }

    if (!this.contacto.Correo || !correo.test(this.contacto.Correo)) {
      errores.push("El correo es obligatorio o no tiene un formato válido. Ejemplo: correo@ejemplo.com");
    }

    if (!this.contacto.Telefono || !soloNumeros.test(this.contacto.Telefono)) {
      errores.push("El teléfono es obligatorio o no tiene un formato válido. Ejemplo: 012346789");
    }

    if (!this.contacto.Mensaje || this.contacto.Mensaje.length > 500) {
      errores.push("El mensaje es obligatorio o es demasiado largo. Máximo 500 caracteres.");
    }

    return errores;
  }

  private mostrarAlertas(tipo: string, mensaje: string) :void {
    this.alerta.Tipo = tipo;
    this.alerta.Mensaje = mensaje;
    this.alerta.Mostrar = true;

    window.scrollTo(0, 0);
  }
}
