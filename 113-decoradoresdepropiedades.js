"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function editable113(esEditable) {
    return function (target, nombrePropiedad, descriptor) {
        descriptor.writable = esEditable;
    };
}
function editableProp113(esEditable) {
    return function (target, nombrePropiedad) {
        let descriptor = {
            writable: esEditable
        };
        return descriptor;
    };
}
class Villano113 {
    constructor(nombre) { }
    plan() {
        console.log("Es dominar el mundo");
    }
}
__decorate([
    editableProp113(false)
], Villano113.prototype, "nombre", void 0);
__decorate([
    editable113(false)
], Villano113.prototype, "plan", null);
let lex113 = new Villano113("Lex Luthor");
lex113.plan = function () {
    console.log("Es cortar flores");
};
lex113.plan();
