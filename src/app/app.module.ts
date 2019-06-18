import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { NoticiasService } from './services/noticias.service';
// Módulos
import { PagesComponent } from './pages/pages.component';
import { BarraSuperiorComponent } from './shared/barra-superior/barra-superior.component';
import { BarraInferiorComponent } from './shared/barra-inferior/barra-inferior.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

import { APP_ROUTES } from './app.routes';
import { VideoYoutubePipe } from './pipes/video-youtube.pipe';

@NgModule({
  declarations: [
    AppComponent, PagesComponent,
    BarraSuperiorComponent,
    BarraInferiorComponent,
    ContactenosComponent,
    NoticiasComponent,
    PrincipalComponent,
    ServiciosComponent,
    NopagefoundComponent,
    VideoYoutubePipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCFY-VoWCam4TxWxwHOfr68lT-GGz6Uobk'
    }),
    HttpClientModule
  ],
  providers: [NoticiasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
