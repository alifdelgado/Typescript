"use strict";
class Xmen73 {
    constructor() {
    }
    static crearXmen() {
        console.log("Se creo usando un metodo estatico");
        return new Xmen73();
    }
}
Xmen73.nombre = "Wolverine";
let wolverine73 = Xmen73.crearXmen();
console.log(wolverine73);
