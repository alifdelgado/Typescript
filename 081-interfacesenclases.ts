interface Xmen81{
    nombre:string;
    nombreReal?:string;
    regenerar(nombreReal:string):void;
};

class Mutante81 implements Xmen81{
    nombre:string;
    regenerar(nombre:string){
        console.log("Hola " + nombre);
    }
}

let wolverine81 = new Mutante81();