import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User;

  constructor() {
    this.user = new User( null, null, null, null, null, null );
  }

  ngOnInit(): void {
    
  }

  login( form: NgForm ){

    let email = this.user.email as string;
    let user = JSON.parse( localStorage.getItem( email ) || '{}' );

    if( user && this.user.password == user.password ) {
      alert("Inicio de sesión exitosa");
      localStorage.setItem( "user", user.name );
      form.reset;
      window.location.reload();
    } else {
      alert("Credenciales incorrectas");
    }

  }

}
