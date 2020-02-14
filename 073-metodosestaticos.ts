class Xmen73{
    static nombre:string = "Wolverine";

    constructor(){

    }

    static crearXmen(){
        console.log("Se creo usando un metodo estatico");
        return new Xmen73();
    }
}

let wolverine73 = Xmen73.crearXmen();
console.log(wolverine73);
