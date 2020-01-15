import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})

export class AlertasComponent {
  @Input() tipo: string;
  @Input() mensaje: string;
  @Input() mostrar: boolean;

  constructor() { }

  close() {
    this.mostrar = false;
  }
}
