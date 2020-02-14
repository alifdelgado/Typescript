class Avenger71{
    constructor(public nombre:string, private nombreReal:string){
    }
    
    protected getNombre():string{
        return this.nombre;
    }
}

class Xmen71 extends Avenger71{
    constructor(nombre:string, nombreReal:string){
        super(nombre, nombreReal);
    }

    public getNombre():string{
        return super.getNombre();
    }
}

let ciclope:Xmen71 = new Xmen71("Ciclope", "Scott");
console.log(ciclope.getNombre());