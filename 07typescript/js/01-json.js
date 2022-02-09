//  Clases que son plantillas
var auto={
    color:"rojo",
    modelo:"cx5",
    marca:"mazda",
    cambiarColor(nuevoColor){
        auto.color=nuevoColor;
        console.log(this);
    }
};
auto.cambiarColor("verde");
console.log(auto);