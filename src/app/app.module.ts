import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { AppComponent } from './app.component';
import { PrincipalComponent } from './componentes/principal/principal.component';

import { AgmCoreModule } from '@agm/core';

// Componentes
import { RUTAS } from '../app/componentes/index.routes';
import { BarraSuperiorComponent } from './componentes/compartidos/barra-superior/barra-superior.component';
import { BarraInferiorComponent } from './componentes/compartidos/barra-inferior/barra-inferior.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { ContactenosComponent } from './componentes/contactenos/contactenos.component';
import { CrearNoticiaComponent } from './componentes/noticias/crear-noticia/crear-noticia.component';
import { AlertasComponent } from './componentes/compartidos/alertas/alertas.component';

// Servicios
import { NoticiasService } from './services/noticias.service';
import { GeneralesService } from './services/generales.service';
import { VideoYoutubePipe } from './pipes/video-youtube.pipe';

// Ng Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './componentes/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    BarraSuperiorComponent,
    BarraInferiorComponent,
    NoticiasComponent,
    ServiciosComponent,
    ContactenosComponent,
    VideoYoutubePipe,
    CrearNoticiaComponent,
    AlertasComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(RUTAS, {useHash: true}),
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDVDq3WaLhyRiVDCV4tn8s3IdRsTROQnN0'
    }), HttpClientModule, FormsModule, CommonModule,
    NgbModule
  ],
  providers: [NoticiasService, GeneralesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
