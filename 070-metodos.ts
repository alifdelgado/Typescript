class Avenger70{
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

    public bio():void{
        let mensaje = `${this.nombre} ${this.nombreReal} ${this.equipo}`;
        console.log(mensaje);
    }

    private cambiarEquipo(nuevoEquipo:string):boolean{
        if(nuevoEquipo===this.equipo){
            return false;
        } else {
            return true;
        }
    }

    public cambiarEquipoPublico(nuevoEquipo:string):boolean{
        return this.cambiarEquipo(nuevoEquipo);
    }
}

let antman70:Avenger70 = new Avenger70("Antman", "Cap", "Scott Lang");
console.log(antman70);
antman70.bio();
console.log(antman70.cambiarEquipoPublico("Cap"));