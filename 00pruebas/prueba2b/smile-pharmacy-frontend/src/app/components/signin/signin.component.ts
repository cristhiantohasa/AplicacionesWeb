import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public user: User;

  constructor() {
    this.user = new User( null, null, null, null, null, null );
  }

  ngOnInit(): void {
  }

  signin( form: NgForm ){
    let email: string = this.user.email as string
    localStorage.setItem( email , JSON.stringify( this.user )  );
    alert( "Usuario creado con éxito" )
    form.reset()
  }

}
