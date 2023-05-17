import { Output } from '@angular/core';
import { Component, EventEmitter } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css']
})
export class CaracteristicasEmpleadoComponent {
  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  constructor(private miServicio:ServicioEmpleadosService){

  }
  agregaCaracteristicas (value: string){
    this.miServicio.muestraMensaje(value);
    //this.caracteristicasEmpleados.emit(value);
  }
}
