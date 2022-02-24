import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public user: User;

  constructor() {
    this.user = new User( null, null, null, null, null, null );
  }

  ngOnInit(): void {
  }

  contact( form: NgForm ) {
    alert( "Información enviada" )
  }

}
