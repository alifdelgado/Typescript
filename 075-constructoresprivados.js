"use strict";
class Apocalipsis {
    constructor(nombre) {
        this.nombre = nombre;
    }
    static llamarApocalipsis() {
        if (!Apocalipsis.instancia) {
            Apocalipsis.instancia = new Apocalipsis("Soy el verdadero apocalipsis!!!");
        }
        return Apocalipsis.instancia;
    }
}
let real = Apocalipsis.llamarApocalipsis();
console.log(real);
