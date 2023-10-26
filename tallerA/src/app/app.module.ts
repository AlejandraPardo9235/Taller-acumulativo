import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EditarReservaComponent } from './editar-reserva/editar-reserva.component';
import { ListarReservasComponent } from './listar-reservas/listar-reservas.component';

@NgModule({
  declarations: [
    AppComponent,
    EditarReservaComponent, 
    ListarReservasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
