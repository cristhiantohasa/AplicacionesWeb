import { Component } from "@angular/core";
import { Camiseta } from "../modelos/camiseta";
import { CamisetaService } from '../services/camiseta.service';
@Component({
    selector:'camiseta',    
    templateUrl:'./camiseta.component.html',
    providers:[CamisetaService]//hay que ponerlo como arreglo y es un proveedor
})
export class CamisetaComponent{
    public titulo:string="Componente camiseta";
    public camisetas:Array<Camiseta>;
    public marcas:String[];
    public color:string;
    public miColor:string;
    public miMarca:string;

    constructor(
        private _camisetaService:CamisetaService
    ){
        this.color='blue';
        this.marcas=new Array();
        this.miColor='verde';
        this.miMarca="Best";
        this.camisetas=_camisetaService.getCamisetas();
        /*lo cortamos y pegamos en el service de camiseta
        this.camisetas=[
            new Camiseta("Adidas","rojo",12,true),
            new Camiseta("Rebook","rojo",12,true),
            new Camiseta("Nike","rojo",12,true),
            new Camiseta("Puma","rojo",12,true),
            new Camiseta("Adidas","rojo",12,true),
        ]*/
    }
    ngOnInit(){
        this.camisetas=this._camisetaService.getCamisetas();
        console.log(this.camisetas);
        this.getMarcas();
        //this.getMarca();
    }
    getMarcas(){
        this.camisetas.forEach((camiseta,index)=>{
            //eliminar duplicados
            if(this.marcas.indexOf(camiseta.marca)<0){
                this.marcas.push(camiseta.marca);
            }
            console.log(index);
        });
        console.log(this.marcas);
    }
    getMarca(){
        alert(this.miMarca);
    }
    addMarca(){
        this.marcas.push(this.miMarca);
    }
    borrarMarca(index:number){
        //delete this.marcas[index];//borra per lo convierte en undefined
        this.marcas.splice(index,1);//le pase el index y a partir de este borra el elemento
    }
}