type Heroe39 = {
    nombre:string,
    edad:number,
    poderes:string[],
    getNombre:()=>string
};

let flash39:Heroe39 = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Puede correr muy rapido", "Viajar por el tiempo"],
    getNombre(){
        return this.nombre;
    }
};

let superman39:Heroe39 = {
    nombre: "Clark Kent",
    edad: 500,
    poderes: ["Puede volar", "Super velocidad"],
    getNombre(){
        return this.nombre;
    }
};