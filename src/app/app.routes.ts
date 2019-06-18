import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

const appRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: '', component: PrincipalComponent },
            { path: 'noticias', component: NoticiasComponent },
            { path: 'servicios', component: ServiciosComponent },
            { path: 'contactenos', component: ContactenosComponent },
        ]
    },
    { path: '**', component: NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });

