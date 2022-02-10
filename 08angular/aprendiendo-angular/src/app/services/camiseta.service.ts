import { Injectable } from "@angular/core";
import { Camiseta } from "../modelos/camiseta";
@Injectable()//inyectar la dependencia para no hacer new a cada rato
export class CamisetaService{
    public camisetas:Array<Camiseta>;
    constructor(){
        this.camisetas=[
            new Camiseta("Adidas","rojo",10,true),
            new Camiseta("Rebook","azul",12,false),
            new Camiseta("Nike","verde",15,true),
            new Camiseta("Puma","blanco",20,false),
            new Camiseta("Adidas","rojo",12,true)
    ];
    }
    getCamisetas():Array<Camiseta>{
        return this.camisetas;
    }
}