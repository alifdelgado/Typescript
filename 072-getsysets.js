"use strict";
class Avenger72 {
    constructor(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        if (this._nombre) {
            return this._nombre;
        }
        else {
            return "No tiene un nombre el avenger";
        }
    }
    set nombre(nombre) {
        if (nombre.length < 3) {
            throw new Error("Esto no debe pasar!!!");
            return;
        }
        this._nombre = nombre;
    }
}
let ciclope72 = new Avenger72("Wolverine");
console.log(ciclope72.nombre);
ciclope72.nombre = "Ciclope";
console.log(ciclope72.nombre);
