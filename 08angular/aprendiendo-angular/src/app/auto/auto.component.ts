import { Component } from "@angular/core";
@Component({
    selector:'autos',//etiqueta del componente
    /*template:`<h2>Este es el componente auto</h2>
    <p>Bienvenido</p>
    `*/
    templateUrl:'./auto.component.html'
})//no poner punto y coma
export class AutoComponent{
    public titulo:string;
    public mensaje:string;
    constructor(){
        this.titulo="Componente auto";
        this.mensaje="Hola"
    }
    ngOnInit(){
        //se ejecuta cada vez que cargo el componente
        console.log("Soy init");
    }
    ngDoCheck(){
        //se ejecuta cada vez que hago un cambio
        console.log("Soy DoCheck");
    }
    ngOnDestroy(){
        //sirve para ejecutar algo antes
        //de eliminar una instancia del componente
        console.log("Soy onDestroy");
    }
    cambiarMensaje(){
        this.mensaje="Bienvenido";
    }
}