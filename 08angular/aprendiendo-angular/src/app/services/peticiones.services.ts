import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class PeticionesServices{
    public url:string;
    constructor(
        public _http:HttpClient
    ){
        this.url="https://reqres.in/";

        //https://reqres.in/api/users/1
    }

    getUser(userId:number):Observable<any>{
        //peticion por ajax http
        return this._http.get(this.url+'api/users/'+userId);
    }
} //npm install rxjs-compat
//npm uninstall rxjs