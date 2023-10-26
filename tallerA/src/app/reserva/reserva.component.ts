import { Component } from '@angular/core';
import { ReservaService } from './reserva.service';
import { Reserva } from './reserva.model';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent {


  reservas: Reserva[] = [];
  router: any;

  constructor(private reservaService: ReservaService) {}

 /* ngOnInit(): void {
    this.reservas = this.reservaService.getReservas();
  }

  deleteReserva(id: number): void {
    this.reservaService.deleteReserva(id);
  }

  editarReserva(reserva: Reserva): void {
    this.reservaService.editReserva(reserva); // Redirige a la página de edición con el ID de la reserva
  }

  async eliminarReserva(id: number): Promise<void> {
    const confirmacion = await this.reservaService.confirmarEliminacion(id);
  
    if (confirmacion) {
      // La reserva fue eliminada
      // Actualiza la lista de reservas después de la eliminación
      this.reservaService.deleteReserva(id);
      this.reservas = this.reservaService.getReservas();
    }
  }
  
}*/

}
