class Avenger68{
    nombre:string = "";
    equipo:string = '';
    nombreReal:string = '';
    puedePelear:boolean = false;
    peleasGanadas:number = 0;

    constructor(nombre:string, equipo:string, nombreReal:string){
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
}

let antman68:Avenger68 = new Avenger68("Antman", "Cap", "Scott Lang");
console.log(antman68);