"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function editable(esEditable) {
    return function (target, nombrePropiedad, descriptor) {
        if (!esEditable) {
            console.warn('No me haran cambiar de opinion');
        }
        descriptor.writable = esEditable;
    };
}
class Villano112 {
    constructor(nombre) { }
    plan() {
        console.log("Es dominar el mundo");
    }
}
__decorate([
    editable(false)
], Villano112.prototype, "plan", null);
let lex112 = new Villano112("Lex Luthor");
lex112.plan = function () {
    console.log("Es cortar flores");
};
lex112.plan();
