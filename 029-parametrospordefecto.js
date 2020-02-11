"use strict";
function nombreCompleto(nombre, apellido, capitalizado = true) {
    if (capitalizado) {
        return capitalizar(nombre) + " " + capitalizar(apellido);
    }
    else {
        return nombre + " " + apellido;
    }
}
function capitalizar(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
}
let nombre29 = nombreCompleto("Tony", "Stark", false);
console.log(nombre29);
