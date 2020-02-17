"use strict";
class Cuadrado {
    area() {
        return this.base * this.altura;
    }
}
let cuadrado = new Cuadrado();
cuadrado.base = 10;
cuadrado.altura = 10;
console.log(cuadrado.area());
