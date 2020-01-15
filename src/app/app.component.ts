import { Component } from '@angular/core';
import { GeneralesService } from './services/generales.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _generalSrv: GeneralesService){
    this.ActivarHeroku();
  }

  // se usa para hacer ping a la página cada 40 min y que no entre en sleep de Heroku
  ActivarHeroku(){    
    setInterval(() => {
      this._generalSrv.activarHeroku();
    }, 300000);
  }
}
