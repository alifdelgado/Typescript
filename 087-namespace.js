"use strict";
var Validaciones;
(function (Validaciones) {
    function validarTexto(texto) {
        if (texto.length > 3) {
            return true;
        }
        return false;
    }
    Validaciones.validarTexto = validarTexto;
    function validarFecha(fecha) {
        if (isNaN(fecha.valueOf())) {
            return false;
        }
        return true;
    }
    Validaciones.validarFecha = validarFecha;
})(Validaciones || (Validaciones = {}));
let hoy = new Date();
console.log(Validaciones.validarTexto("Barry Allen"));
console.log(Validaciones.validarFecha(hoy));
