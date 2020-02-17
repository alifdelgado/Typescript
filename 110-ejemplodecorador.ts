function planVillano(constructor:Function){
    constructor.prototype.imprimirPlan = function(){
        console.log("El plan de " + this.nombre + " es dominar el mundo!!!");
    }
}

@planVillano
class Villano110{
    constructor(nombre:string){

    }
}

let lex = new Villano110("Lex Luthor");
(<any>lex).imprimirPlan();