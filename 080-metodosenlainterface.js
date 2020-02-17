"use strict";
function enviarMision(xmen) {
    console.log("Enviando a: " + xmen.nombre80);
    xmen.regenerar("Logan");
}
;
let wolverine80 = {
    nombre80: "Wolverine",
    regenerar(x) {
        console.log("Se ha regenerado: " + x);
    }
};
enviarMision(wolverine80);
