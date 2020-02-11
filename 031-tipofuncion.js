"use strict";
function sumar(a, b) {
    return a + b;
}
function saludar(nombre) {
    return "I'm " + nombre;
}
function salvarMundo() {
    console.log("El mundo esta salvado");
}
let miFuncion;
miFuncion = sumar;
console.log(miFuncion(5, 5));
