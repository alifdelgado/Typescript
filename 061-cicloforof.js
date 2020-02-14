"use strict";
let thor61 = {
    nombre: "Thor",
    arma: "Mjolnir"
};
let ironman61 = {
    nombre: "Ironman",
    arma: "armorsuit"
};
let capitan61 = {
    nombre: "Capitan America",
    arma: "Escudo"
};
let avengers61 = [thor61, ironman61, capitan61];
for (let i in avengers61) {
    console.log(avengers61[i]);
}
for (let avenger of avengers61) {
    console.log(avenger.nombre, avenger.arma);
}
