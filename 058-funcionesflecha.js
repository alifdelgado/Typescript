"use strict";
// function sumar58(a, b){
//     return a + b;
// }
let sumar58 = (a, b) => a + b;
console.log(sumar58(2, 2));
let darOrdenHulk58 = (orden) => `Hulk ${orden}`;
console.log(darOrdenHulk58('smash!!!'));
let capitanAmerica58 = {
    nombre: "Hulk",
    darOrdenHulk58: function () {
        setTimeout(() => console.log(`${this.nombre} smash!!!`), 1000);
    }
};
