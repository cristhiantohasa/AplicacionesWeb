import { Component, OnInit, ViewChild } from '@angular/core';
import { Auto } from '../../models/auto';
import { Global } from '../../services/global';
import { AutoService } from '../../services/auto.service';
import { CargarService } from '../../services/cargar.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'guardar-auto',
  templateUrl: './createauto.component.html',
  styleUrls: ['./createauto.component.css'],
  providers:[AutoService, CargarService]
})
export class CreateautoComponent implements OnInit {

  public titulo: string;
  public auto: Auto;
  public autoGuardar: Auto;
  public url: string;
  public archivosParaCargar: Array<File>;
  public idGuardado: string;

  @ViewChild( 'archivoImagen' ) fileInput: any;
  public status: string;

  constructor(
    private _autoService: AutoService,
    private _cargarService: CargarService
  ) {
    this.titulo = "GUARDAR AUTO";
    this.url = Global.url;
    this.auto = new Auto( '','','','','',2023,10000,'' );
    this.autoGuardar = new Auto( '','','','','',2022,10000,'' );
    this.archivosParaCargar = [];
    this.idGuardado = "";
    this.status = "";
  }

  ngOnInit(): void {
  }

  guardarAuto( form:NgForm ) {
    this._autoService.guardarAuto( this.auto ).subscribe(
      response => {
        if( response.auto ) {
          if( this.archivosParaCargar ) {
            this._cargarService.peticionRequest( Global.url+"subir-imagen/"+response.auto._id, [], this.archivosParaCargar, 'imagen' )
            .then( ( result:any ) => {
              this.autoGuardar = result.response;
              this.status = 'success';
              console.log( result.auto._id );
              this.idGuardado = result.auto._id;
              form.reset();
              this.fileInput.nativeElement.value = '';
            } );
          } else {
            //this.autoGuardar = response.auto;
            this.status = 'failed';
            //form.reset();
          }
        } else {
          this.status = 'failed';
        }
      },
      error => {
        console.log( <any>error );
      }
    );
  }

  imagenChangeEvent( archivoSeleccionado: any ) {
    this.archivosParaCargar = <Array<File>>archivoSeleccionado.target.files;
  }

}
