"use strict";
class Avenger71 {
    constructor(nombre, nombreReal) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
    }
    getNombre() {
        return this.nombre;
    }
}
class Xmen71 extends Avenger71 {
    constructor(nombre, nombreReal) {
        super(nombre, nombreReal);
    }
    getNombre() {
        return super.getNombre();
    }
}
let ciclope = new Xmen71("Ciclope", "Scott");
console.log(ciclope.getNombre());
