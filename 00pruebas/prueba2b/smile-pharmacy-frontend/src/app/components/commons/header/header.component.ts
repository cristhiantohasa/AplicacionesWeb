import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user: any;

  constructor() {
    this.user = '';
  }

  ngOnInit(): void {
    this.readUser();
  }

  readUser() {
    this.user = localStorage.getItem( "user" );
  }

  logout() {
    localStorage.removeItem( "user" );
    window.location.reload();
  }

}
