import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Reserva } from '../reserva/reserva.model';

@Component({
  selector: 'app-editar-reserva',
  templateUrl: './editar-reserva.component.html',
  styleUrls: ['./editar-reserva.component.css']
})
export class EditarReservaComponent {

  @Input() reserva: Reserva = {
    id: 0, 
    nombre: '',
    apellidos: '',
    email: '',
    tipoCliente:'',
    fechaLlegada: '',
    fechaSalida: ''

  };
  reservas: Reserva[] = [];
  @Output() guardarCambiosEvent = new EventEmitter<Reserva>();

  constructor() {}

  guardarCambios() {
    if (this.reserva.id) {
      const reservaExistente = this.reservas.find(r => r.id === this.reserva.id);
        if(reservaExistente){
          
          this.reserva.id = reservaExistente.id
          this.reserva.nombre = reservaExistente.nombre,
          this.reserva.apellidos = reservaExistente.apellidos,
          this.reserva.email = reservaExistente.email,
          this.reserva.tipoCliente = reservaExistente.tipoCliente,
          this.reserva.fechaLlegada = reservaExistente.fechaLlegada,
          this.reserva.fechaSalida = reservaExistente.fechaSalida
        }
      }
  
        // Emitir un evento para notificar que los cambios se guardaron
        this.guardarCambiosEvent.emit(this.reserva);
        
        // Opcionalmente, puedes guardar los datos actualizados en localStorage si es necesario
        localStorage.setItem('reservas', JSON.stringify(this.reservas));
  
        // Puedes mostrar un mensaje de éxito
        console.log('Cambios guardados con éxito.');
      }
    }


