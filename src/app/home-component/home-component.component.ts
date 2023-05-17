import { Component, OnInit } from '@angular/core';
import { Empleado } from "../empleado.model"
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})

export class HomeComponentComponent implements OnInit{
  title = 'Lista de Empleados';

  constructor(private miServicio: ServicioEmpleadosService,
    private empleado:EmpleadosService){
      //this.empleados = this.empleado.empleados;
  }

  ngOnInit(): void {
      this.empleado.obtenerEmpleados().subscribe(misEmpleados => {
      
        console.log(misEmpleados);

      this.empleados = Object.values(misEmpleados);

      this.empleado.setEmpleados(this.empleados);
     });
  }

  empleados:Empleado[]=[];

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)
    //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre + " " + miEmpleado.apellido);
    this.empleado.agregarEmpleadoServicio(miEmpleado);
  }
  
  
  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;
}
