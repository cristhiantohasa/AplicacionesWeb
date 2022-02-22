import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Auto } from '../models/auto';
import { Global } from '../services/global';
import { Observable } from 'rxjs';

@Injectable()
export class AutoService {
    
    public url: string;
    
    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.url;
    }

    //  Ver informacion de todos los autos
    getAutos(): Observable<any> {
        let headers = new HttpHeaders().set( 'Content-Type', 'application/json' );
        return this._http.get( this.url+'autos', {headers:headers} );
    }

    //  Guardar auto
    //  http://localhost:3600/guardar-auto
    guardarAuto( auto:Auto ): Observable<any> {
        let params = JSON.stringify( auto );
        let headers = new HttpHeaders().set( 'Content-Type', 'application/json' );
        return this._http.post( this.url+'guardar-auto', params, {headers:headers} );
    }

    //  Obtener datos de un auto
    //  http://localhost:3600/auto/:id
    getAuto( id:String ): Observable<any> {
        let headers = new HttpHeaders().set( 'Content-Type','application/json' );
        return this._http.get( this.url+'auto/'+id, {headers:headers} );
    }

    //  Actualizar datos de un Auto
    //  http://localhost:3600/auto/:id
    updateAuto( auto:Auto ): Observable<any> {
        let params = JSON.stringify( auto );
        let headers = new HttpHeaders().set( 'Content-Type','application/json' );
        return this._http.put( this.url+'auto/'+auto._id, params, {headers:headers} );
    }

    //  Eliminar un auto
    //  http://localhost:3600/auto/:id
    deleteAuto( id:String ): Observable<any> {
        let headers = new HttpHeaders().set( 'Content-Type','application/json' );
        return this._http.delete( this.url+'auto/'+id, {headers:headers} );
    }
    
}