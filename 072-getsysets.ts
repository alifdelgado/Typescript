class Avenger72{
    private _nombre:string;

    constructor(nombre?:string){
        this._nombre = nombre;
    }
    
    get nombre():string{
        if(this._nombre){
            return this._nombre;
        } else {
            return "No tiene un nombre el avenger";
        }
    }
    
    set nombre(nombre:string){
        if(nombre.length < 3){
            throw new Error("Esto no debe pasar!!!");
            return;
        }
        this._nombre = nombre;
    }
}

let ciclope72:Avenger72 = new Avenger72("Wolverine");
console.log(ciclope72.nombre);
ciclope72.nombre = "Ciclope";
console.log(ciclope72.nombre);