"use strict";
class Avenger68 {
    constructor(nombre, equipo, nombreReal) {
        this.nombre = "";
        this.equipo = '';
        this.nombreReal = '';
        this.puedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
}
let antman68 = new Avenger68("Antman", "Cap", "Scott Lang");
console.log(antman68);
