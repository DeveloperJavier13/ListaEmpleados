import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient, private loginService:LoginService) {  }

cargarEmpleados(){
  const token = this.loginService.getIdToken();
  return this.httpClient.get('https://clientes-b0735-default-rtdb.firebaseio.com/datos.json?auth=' + token);
}

  guardarEmpleados(empleados:Empleado[]){
    const token = this.loginService.getIdToken();
    this.httpClient.put("https://clientes-b0735-default-rtdb.firebaseio.com/datos.json?auth=" + token, empleados).subscribe(
      reponse => console.log("Se han guardado los registros: "+ reponse),
      error => console.log("Error: " + error)
    );
  }

  actualizarEmpleados(indice:number, empleado:Empleado){
    const token = this.loginService.getIdToken();
    let  url="https://clientes-b0735-default-rtdb.firebaseio.com/datos/" + indice + ".json?auth=" + token;
    this.httpClient.put(url, empleado).subscribe(
      reponse => console.log("Se ha modificado el registro: "+ reponse),
      error => console.log("Error: " + error)
    );
  }

  eliminarEmpleados(indice:number){
    const token = this.loginService.getIdToken();
    let url="https://clientes-b0735-default-rtdb.firebaseio.com/datos/" + indice + ".json?auth=" + token;
    this.httpClient.delete(url).subscribe(
      reponse => console.log("Se ha eliminado el registro: "+ reponse),
      error => console.log("Error: " + error)
    );
  }
}
