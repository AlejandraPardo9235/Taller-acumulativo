import { Component, EventEmitter, Input, Output } from '@angular/core';
import Swal from 'sweetalert2';

import { NgModel } from '@angular/forms';
import { Reserva } from '../reserva/reserva.model';


@Component({
  selector: 'app-listar-reservas',
  templateUrl: './listar-reservas.component.html',
  styleUrls: ['./listar-reservas.component.css']
})
export class ListarReservasComponent {
  reservas: Reserva[] = [];
  nuevaReserva!: Reserva;
  @Output() editarReservaEvent = new EventEmitter<Reserva>();
  @Output() eliminarReservaEvent = new EventEmitter<Reserva>();



  reservasIniciales: Reserva[] = [
    {
      id: 1,
      nombre: 'Juan',
      apellidos: 'Pérez',
      email: 'juan@example.com',
      tipoCliente: 'VIP',
      fechaLlegada: '2023-11-01',
      fechaSalida: '2023-11-10',
    },
    {
      id: 2,
      nombre: 'María',
      apellidos: 'López',
      email: 'maria@example.com',
      tipoCliente: 'Socio',
      fechaLlegada: '2023-12-05',
      fechaSalida: '2023-12-15',
    }

  ]

  constructor() { }

  ngOnInit() {
    this.reservas = [...this.reservasIniciales];
  }


  editarReserva(reserva: Reserva) {
    Swal.fire({
      title: 'Editar Reserva',
      html: `
        <form>
          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" [(ngModel)]="reserva.nombre" required>
          </div>
          <div class="form-group">
            <label for="apellidos">Apellidos:</label>
            <input type="text" id="apellidos" name="apellidos" [(ngModel)]="reserva.apellidos" required>
          </div>
          <div class="form-group">
          <label for="email">Email:</label>
          <input type="text" id="email" name="email" [(ngModel)]="reserva.email" required>
        </div>
        <div class="form-group">
        <label for="tipoCliente">TipoCliente:</label>
        <select id="tipoCliente" name="tipoCliente" [(ngModel)]="reserva.tipoCliente" required>
          <option value="VIP">VIP</option>
          <option value="socio">Socio</option>
          <option value="no socio">No Socio</option>
        </select>
      </div>
      <div class="form-group">
      <label for="fechaEntrada">Fecha Entrada:</label>
      <input type="text" id="fechaEntrada" name="fechaEntrada" [(ngModel)]="reserva.fechaEntrada" required>
    </div>
    <div class="form-group">
    <label for="fechaSalida">Fecha salida:</label>
    <input type="text" id="fechaSalida" name="fechaSalida" [(ngModel)]="reserva.fechaSalida" required>
  </div>
        </form>
      `,
      showCancelButton: true,
      confirmButtonText: 'Guardar Cambios',
      cancelButtonText: 'Cancelar',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        if (!reserva.nombre) {
          Swal.showValidationMessage('El nombre es requerido.');
        } else if (!reserva.apellidos) {
          Swal.showValidationMessage('Los apellidos son requeridos.');
        } else if (!reserva.email) {
          Swal.showValidationMessage('El email es requerido.');
        }
        else if (!reserva.tipoCliente) {
          Swal.showValidationMessage('El Tipo de cliente es requerido.');
        }
        else if (!reserva.fechaLlegada) {
          Swal.showValidationMessage('La fecha de llegada es requerida.');
        }
        else if (!reserva.fechaSalida) {
          Swal.showValidationMessage('La fecha de salida es requerida.');
        }

        else {
          // Emitir un evento de edición con la reserva actualizada
          this.editarReservaEvent.emit(reserva);

          const index = this.reservas.findIndex(r => r.id === reserva.id);
          if (index !== -1) {
            this.reservas[index] = reserva;
          }
        }
      }
    });
  }

  eliminarReserva(reserva: Reserva) {
    Swal.fire({
      title: '¿Estás seguro de eliminar esta reserva?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Emitir un evento de eliminación con la reserva que se va a eliminar
        this.eliminarReservaEvent.emit(reserva);
  
        // Eliminar la reserva del arreglo (puedes hacerlo aquí o en el componente padre)
        this.reservas = this.reservas.filter(r => r.id !== reserva.id);
      }
    });
  }

  agregarReserva() {
    this.reservas.push(this.nuevaReserva);
    localStorage.setItem('reservas', JSON.stringify(this.reservas));
  }
};

