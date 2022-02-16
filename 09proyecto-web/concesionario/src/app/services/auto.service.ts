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

}