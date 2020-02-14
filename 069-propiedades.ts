class Avenger69{
    public nombre:string = "";
    protected equipo:string = '';
    private nombreReal:string = '';
    private puedePelear:boolean = false;
    private peleasGanadas:number = 0;

    constructor(nombre:string, equipo:string, nombreReal:string){
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
}

let antman69:Avenger69 = new Avenger69("Antman", "Cap", "Scott Lang");
console.log(antman69);