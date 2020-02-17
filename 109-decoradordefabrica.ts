function consola(constructor:Function){
    console.log(constructor);
}

@imprimirConsola(false)
class Villano109{
    constructor(nombre:string){
        this.nombre = nombre;
    }
}

function imprimirConsola(imprimir:boolean):Function{
    if(imprimir){
        return consola;
    } else {
        return null;
    }
}