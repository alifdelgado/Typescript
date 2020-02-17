interface Xmen80{
    nombre80:string,
    regenerar(nombreReal:string):void;
}

function enviarMision(xmen:Xmen80){
    console.log("Enviando a: " + xmen.nombre80);
    xmen.regenerar("Logan");
};

let wolverine80:Xmen80 = {
    nombre80: "Wolverine",
    regenerar(x:string){
        console.log("Se ha regenerado: " + x);
    }
};

enviarMision(wolverine80);