function consola(constructor:Function){
    console.log(constructor);
}

@consola
class Villano108{
    constructor(nombre:string){
        this.nombre = nombre;
    }
}