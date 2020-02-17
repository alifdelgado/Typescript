function planVillano(constructor:Function){
    constructor.prototype.imprimirPlan = function(){
        console.log("El plan de " + this.nombre + " es dominar el mundo!!!");
    }
}

function imprimible(constructor:Function){
    constructor.prototype.imprimir = function(){
        console.log(this);
    }
}

@imprimible
@planVillano
class Villano111{
    constructor(nombre:string){

    }
}

let lex = new Villano111("Lex Luthor");
(<any>lex).imprimirPlan();
(<any>lex).imprimir();