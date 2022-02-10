//  Una interface define los metodos obligatorios que debe
//  Tener un clase, en este caso la clase auto
interface AutoBase{
    setColor(color);
    getColor();
}
function pegarCalcomania(logo:string){
    return function(target:Function){
        target.prototype.agregarCalmomania=function():void{
            console.log("Calcomania en auto: "+logo);
        }
    }
}
@pegarCalcomania('Hola mundo')

//  Clase (modelo del objeto/plantilla)
class Auto implements AutoBase{
    //  Propiedades (atributos/caracteristicas del objeto)
    //  Public porque son elementos que se pueden usar
    //  desde otras clases
    public marca:string;
    public color:string;
    public cilindraje:string;
    public precio:number;

    //  Metodos-funciones o acciones del objeto
    //  Constructores
    //  Constructor(){ }
   constructor(marca,color,cilindraje,precio){
        this.marca=marca;
        this.color=color;
        this.cilindraje=cilindraje;
        this.precio=precio;
    }
    public setColor(color){
        return this.color=color;
    }
    public getColor(){
        return this.color;
    }
}
/*
var auto1=new Auto();
auto1.marca="Mazda";
auto1.color="verde";
auto1.cilindraje="1500cc";
auto1.precio=200;
*/
var auto=new Auto("Ford","rojo","2500 cc",1500);
var camioneta=new Auto("Mazda","azul","2700 cc",1000);
console.log(auto,camioneta);

//  Herencia para permitir heredar todas las caracteristicas
//  de una clase a un subclase
class Deportivo extends Auto{
    public techoCorredizo:boolean;
    setTechoCorredizo(techo:boolean){
        this.techoCorredizo=techo;
    }
    getTechoCorredizo(){
        return this.techoCorredizo;
    }
}
var auto2=new Deportivo("Mercedes","negro","3700 cc",30000);
auto2.setTechoCorredizo(true);
auto.agregarCalmomania();
console.log(auto2);