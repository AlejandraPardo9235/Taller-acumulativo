import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarReservasComponent } from './listar-reservas/listar-reservas.component';
import { ReservaComponent } from './reserva/reserva.component';
import { EditarReservaComponent } from './editar-reserva/editar-reserva.component';

const routes: Routes = [
  { path: 'listar-reservas', component: ListarReservasComponent },
  { path: 'editar-reservas', component: EditarReservaComponent },
  { path: '', redirectTo: 'listar-reservas', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
