import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app'
import { LoginService } from './login/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Lista de Empleados';

  constructor(private loginService:LoginService){
  }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyCwGVmDT3rpj8-wk-wOr4hxcW6Hte1HB6c",
      authDomain: "clientes-b0735.firebaseapp.com",
    });

       
  }
  estaLogueado(){
    return this.loginService.estalogueado();
  }

  logout(){
    return this.loginService.logout();
  }
  
}
