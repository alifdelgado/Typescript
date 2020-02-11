function nombreCompleto30(nombre:string, ...demasParametros:string[]):string{
    return nombre + " " + demasParametros.join(' ');
}

let superman30 = nombreCompleto30("Clark", "Joseph", "Kent");
let ironman30 = nombreCompleto30("Anthony", "Edward", "Tony", "Stark");
console.log(superman30);
console.log(ironman30);