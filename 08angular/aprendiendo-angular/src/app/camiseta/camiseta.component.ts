import { Component } from "@angular/core";
import { Camiseta } from "../modelos/camiseta";
@Component({
    selector:'camiseta',    
    templateUrl:'./camiseta.component.html',
})
export class CamisetaComponent{
    public titulo:string="Componente camiseta";
    public camisetas:Array<Camiseta>;
    public colores:String[];
    public color:string;
    public miColor:string;

    constructor(
    ){
        this.color='blue';
        this.colores=new Array();
        this.miColor='verde';
        this.camisetas=[
            new Camiseta("Adidas","rojo",12,true),
            new Camiseta("Rebook","rojo",12,true),
            new Camiseta("Nike","rojo",12,true),
            new Camiseta("Puma","rojo",12,true),
            new Camiseta("Adidas","rojo",12,true),
        ]
    }
}