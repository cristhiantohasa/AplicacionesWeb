var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function pegarCalcomania(logo) {
    return function (target) {
        target.prototype.agregarCalmomania = function () {
            console.log("Calcomania en auto: " + logo);
        };
    };
}
var Auto = /** @class */ (function () {
    //  Metodos-funciones o acciones del objeto
    //  Constructores
    //  Constructor(){ }
    function Auto(marca, color, cilindraje, precio) {
        this.marca = marca;
        this.color = color;
        this.cilindraje = cilindraje;
        this.precio = precio;
    }
    Auto.prototype.setColor = function (color) {
        return this.color = color;
    };
    Auto.prototype.getColor = function () {
        return this.color;
    };
    Auto = __decorate([
        pegarCalcomania('Hola mundo')
        //  Clase (modelo del objeto/plantilla)
    ], Auto);
    return Auto;
}());
/*
var auto1=new Auto();
auto1.marca="Mazda";
auto1.color="verde";
auto1.cilindraje="1500cc";
auto1.precio=200;
*/
var auto = new Auto("Ford", "rojo", "2500 cc", 1500);
var camioneta = new Auto("Mazda", "azul", "2700 cc", 1000);
console.log(auto, camioneta);
//  Herencia para permitir heredar todas las caracteristicas
//  de una clase a un subclase
var Deportivo = /** @class */ (function (_super) {
    __extends(Deportivo, _super);
    function Deportivo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Deportivo.prototype.setTechoCorredizo = function (techo) {
        this.techoCorredizo = techo;
    };
    Deportivo.prototype.getTechoCorredizo = function () {
        return this.techoCorredizo;
    };
    return Deportivo;
}(Auto));
var auto2 = new Deportivo("Mercedes", "negro", "3700 cc", 30000);
auto2.setTechoCorredizo(true);
auto.agregarCalmomania();
console.log(auto2);
