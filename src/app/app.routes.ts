import { RouterModule, Routes } from '@angular/router';
import { AboutComponent,
         PortfolioComponent,
         EquipoComponent
       } from"./components/index.paginas";


const app_routes: Routes = [
  { path: 'home', component: PortfolioComponent },
  { path: 'about', component: AboutComponent },
    { path: 'equipo/:id', component: EquipoComponent },
  { path: '**', pathMatch:'full', redirectTo:'home' }

];


export const app_routing = RouterModule.forRoot(app_routes, { useHash:true });
