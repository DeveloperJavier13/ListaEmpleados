import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private mensaje:ServicioEmpleadosService, 
              private dataService:DataService) {
    
   }

  setEmpleados(misEmpleados:Empleado[]){
    this.empleados = misEmpleados;
  }

  empleados:Empleado[]=[];/* 
    new Empleado("Ricardo", "Poxtan", "Director",10000),
    new Empleado("Javier", "González", "Jefe",9000),
    new Empleado("David", "Carrillo", "Programador",8000),
    new Empleado("Daniel", "Farias", "Programador",8000),
  ]; */

  agregarEmpleadoServicio(empleado: Empleado){
    this.mensaje.muestraMensaje("Persona que se va a agregar: " + "\n"
    + empleado.nombre + " " + empleado.apellido + "\n" + "Con el salario de: " +empleado.salario);
    this.empleados.push(empleado);

    this.dataService.guardarEmpleados(this.empleados);
  }

  encontrarEmpleado(indice:number){
    let empleado:Empleado = this.empleados[indice];
    return empleado
  }

  actualizarEmpleado(indice:number, empleado:Empleado){
    let empleadoMod = this.empleados[indice];

    empleadoMod.nombre = empleado.nombre;
    empleadoMod.apellido = empleado.apellido;
    empleadoMod.cargo = empleado.cargo;
    empleadoMod.salario = empleado.salario;

    this.dataService.actualizarEmpleados(indice, empleado);
    //this.dataService.guardarEmpleados(this.empleados);
  }

  eliminarEmpleado(indice:number){
    this.empleados.splice(indice,1); //eliminar directamente del array de empleado
    this.dataService.eliminarEmpleados(indice); //eliminar de la base de datos
    this.dataService.guardarEmpleados(this.empleados);
  }

  obtenerEmpleados(){
    return this.dataService.cargarEmpleados();
  }
}
