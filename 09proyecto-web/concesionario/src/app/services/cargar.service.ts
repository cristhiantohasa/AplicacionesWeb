import { Injectable } from "@angular/core";
import { Global } from '../services/global';

@Injectable()
export class CargarService {
    
  public url: string;

  constructor() {
    this.url = Global.url;
  }

  /*
    Metodo para hacer una peticion ajax para adjuntar un archivo
    pasamos la url, los posibles parametros, en este caso array de tipo string
    un array de archivos y el nombre del archivo de tipo string
  */
  peticionRequest( url: string, params: Array<string>, files: Array<File>, name: string ) {
    
    /*
      Esto retorna un promesa que tiene un resolve:cuando se ha resuelto y reject: cuando
      no se ha resuelto
    */
    return new Promise( function ( resolve, reject ) {

      var formData: any = new FormData(); //Simulacion de formulario en un objeto
      var xhr = new XMLHttpRequest(); //xhr es sinonimo de ajax que contiene un objeto de peticio asincrona de js
      
      //  Recorreme todos los ficheros que lleguen, adjunta al formulario con el nombre que llega
      //  Añade ese archivo con su nombre
      for( var i = 0; i < files.length; i++ ) {
        formData.append( name, files[i], files[i].name );
      }

      //  Cuando haya un cambio
      xhr.onreadystatechange=function () {
        //  Valores que funcionan asi segun ajax
        if( xhr.readyState == 4 ) { //Valores que funcionan así
          if( xhr.status == 200 ) { //Si es exitoso se ejecuta la resolucion de la promesa
            resolve( JSON.parse( xhr.response ) );
          } else {
            reject( xhr.response ); //Caso contrario rechaza
          }
        }
      }

      //  Realizamos la peticion ajax por metodo post y true para que se haga la peticion
      xhr.open( 'POST', url, true );
      //  Envio el formulario o los datos
      xhr.send( formData );

    } );

  }
  
}