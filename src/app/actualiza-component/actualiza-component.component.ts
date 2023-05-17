import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit{
  constructor(private router:Router, 
              private miServicio: ServicioEmpleadosService,
              private empleado:EmpleadosService,
              private route:ActivatedRoute){

}
accion:number;

ngOnInit(): void {

  this.accion = parseInt(this.route.snapshot.queryParams['accion']);
  this.empleados = this.empleado.empleados;
  this.indice = this.route.snapshot.params["id"];

  let empleado:Empleado = this.empleado.encontrarEmpleado(this.indice);

  this.cuadroNombre = empleado.nombre;
  this.cuadroApellido = empleado.apellido;
  this.cuadroCargo = empleado.cargo;
  this.cuadroSalario = empleado.salario;
}

backHome(){
  this.router.navigate(['']);
};

empleados:Empleado[]=[];

/* actualizaEmpleado(){
let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)
//this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre + " " + miEmpleado.apellido);
this.empleado.actualizarEmpleado(this.indice, miEmpleado);

this.router.navigate(['']); //router permite redirigirte a una ruta especifica
}

eliminaEmpleado(){
  this.empleado.eliminarEmpleado(this.indice);

  this.router.navigate(['']);
} */
actualizaEmpleado(){
    if (this.accion == 1) {
      let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)
      //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre + " " + miEmpleado.apellido);
      this.empleado.actualizarEmpleado(this.indice, miEmpleado);
      
      this.router.navigate(['']); //router permite redirigirte a una ruta especifica
    } else {
      this.empleado.eliminarEmpleado(this.indice);

    this.router.navigate(['']);
    }
  } 
  
  

cuadroNombre: string = "";
cuadroApellido: string = "";
cuadroCargo: string = "";
cuadroSalario: number = 0;

indice:number;

}
