import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent implements OnInit{
  
  constructor(private router:Router, 
              private miServicio: ServicioEmpleadosService,
              private empleado:EmpleadosService){

  }
  ngOnInit(): void {
    this.empleados = this.empleado.empleados;
  }

  backHome(){
    this.router.navigate(['']);
  };

  empleados:Empleado[]=[];

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)
    //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre + " " + miEmpleado.apellido);
    this.empleado.agregarEmpleadoServicio(miEmpleado);
    this.router.navigate(['']); //router permite redirigirte a una ruta especifica
  }
  
  
  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;

}
