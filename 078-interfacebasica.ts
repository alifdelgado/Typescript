interface Xmen78{
    nombre78:string,
    poder78?:string
}

function enviarMision78(xmen: Xmen78){
    console.log("Enviando a: " + xmen.nombre78);
}

function enviarCuartel78(xmen: Xmen78){
    console.log("Enviando al cuartel: " + xmen.nombre78);
}

let wolverine78:Xmen78 = {
    nombre78: "Wolverine",
    poder78: "Regeneracion"
};

enviarMision78(wolverine78);
enviarCuartel78(wolverine78);