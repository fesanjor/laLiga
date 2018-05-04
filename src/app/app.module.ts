import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpModule } from"@angular/http";

//RUTAS
import { app_routing } from "./app.routes";
//servicios

import { InfoService } from "./services/info.service";
import { EquiposService } from "./services/equipos.service";


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { EquipoComponent } from './components/equipo/equipo.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortfolioComponent,
    AboutComponent,
    EquipoComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpModule
  ],
  providers: [
      InfoService,
      EquiposService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
