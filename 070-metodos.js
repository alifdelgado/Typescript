"use strict";
class Avenger70 {
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
    bio() {
        let mensaje = `${this.nombre} ${this.nombreReal} ${this.equipo}`;
        console.log(mensaje);
    }
    cambiarEquipo(nuevoEquipo) {
        if (nuevoEquipo === this.equipo) {
            return false;
        }
        else {
            return true;
        }
    }
    cambiarEquipoPublico(nuevoEquipo) {
        return this.cambiarEquipo(nuevoEquipo);
    }
}
let antman70 = new Avenger70("Antman", "Cap", "Scott Lang");
console.log(antman70);
antman70.bio();
console.log(antman70.cambiarEquipoPublico("Cap"));
