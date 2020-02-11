type Heroe40 = {
    nombre:string,
    edad:number,
    poderes:string[],
    getNombre:()=>string
};

let loquesea40:string | number | Heroe40 = "Fernando";
loquesea40 = 10;