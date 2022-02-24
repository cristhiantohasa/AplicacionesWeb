import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from '../models/product';
import { Global } from '../services/global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public url: string;
    
  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
  }

  readProducts(): Observable<any> {
    let headers = new HttpHeaders().set( 'Content-Type', 'application/json' );
    return this._http.get( this.url + 'read-products', {headers: headers} );
  }

  readProduct( nombre: String ): Observable<any> {
    let headers = new HttpHeaders().set( 'Content-Type','application/json' );
    return this._http.get( this.url+'read-product/'+nombre, {headers: headers} );
  }

  createProduct( product: Product ): Observable<any> {
    let params = JSON.stringify( product );
    let headers = new HttpHeaders().set( 'Content-Type', 'application/json' );
    return this._http.post( this.url + 'create-product', params, {headers: headers} );
  }

  updateProduct( product: Product ): Observable<any> {
      let params = JSON.stringify( product );
      let headers = new HttpHeaders().set( 'Content-Type','application/json' );
      return this._http.put( this.url+'update-product/'+product._id, params, {headers: headers} );
  }

  deleteProduct( nombre: String ): Observable<any> {
      let headers = new HttpHeaders().set( 'Content-Type','application/json' );
      return this._http.delete( this.url+'delete-product/'+nombre, {headers: headers} );
  }

}
