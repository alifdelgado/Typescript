"use strict";
var volumen;
(function (volumen) {
    volumen[volumen["min"] = 1] = "min";
    volumen[volumen["medio"] = 5] = "medio";
    volumen[volumen["max"] = 10] = "max";
})(volumen || (volumen = {}));
;
let audio = volumen.medio;
console.log(audio);
console.log(volumen);
