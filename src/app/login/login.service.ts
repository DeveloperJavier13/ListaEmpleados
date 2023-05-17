import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from "firebase/compat/app";

import 'firebase/compat/auth'
import { CookieService } from "ngx-cookie-service";


@Injectable()
export class LoginService{

    constructor(private router:Router, private cookie:CookieService){}

    token:string;

    login(email:string, password:string){
        firebase.auth().signInWithEmailAndPassword(email, password).then(
            response => {
                firebase.auth().currentUser?.getIdToken().then(
                    tokens => {
                        this.token = tokens;
                        this.cookie.set('Token', this.token);
                        this.router.navigate(['/']);
                    }
                )
            }
        );
    }
    
    getIdToken(){
        return this.cookie.get('Token');
    }

    estalogueado(){
        return this.cookie.get('Token');
    }

    logout(){
        firebase.auth().signOut().then(() => {
            this.token = "";
            this.cookie.set('Token', this.token);
            this.router.navigate(['/']);
            window.location.reload();
        });
    }
}