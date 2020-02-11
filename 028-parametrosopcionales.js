"use strict";
function nombreCompleto(nombre, apellido) {
    if (apellido) {
        return nombre + ' ' + apellido;
    }
    else {
        return nombre;
    }
}
let nombre28 = nombreCompleto("Barry");
console.log(nombre28);
