import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViloesComponent } from './componentes/viloes/viloes.component';
import { LocaisComponent } from './componentes/locais/locais.component';
import { LocaisService } from './services/locais/locais.service';
import { ViloesService } from './services/viloes/viloes.service';
import { EnvelopeComponent } from './componentes/envelope/envelope.component';
import { EnvelopeService } from './services/envelope/envelope.service';

@NgModule({
  declarations: [
    AppComponent,
    ViloesComponent,
    LocaisComponent,
    EnvelopeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    LocaisService,
    ViloesService,
    EnvelopeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
