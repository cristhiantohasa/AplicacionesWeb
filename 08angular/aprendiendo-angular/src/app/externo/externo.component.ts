import { Component, OnInit } from '@angular/core';
import { PeticionesServices } from '../services/peticiones.services';

@Component({
  selector: 'externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers:[PeticionesServices]
})
export class ExternoComponent implements OnInit {
  public user:any;
  public userId:any;
  public fecha:any;

  constructor(
    private _peticionesServices:PeticionesServices
  ) { 
    this.userId=1;
  }

  ngOnInit(): void {
    this.cargarUsuario();
    this.fecha=new Date();
  }

  cargarUsuario(){
    this._peticionesServices.getUser(this.userId).subscribe(
      result=>{
        this.user=result.data;
        console.log("Usuario"+this.user);
      },
      error=>{
        console.log(<any>error);
      }
    )
  }

}
