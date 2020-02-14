class Avenger63{
    constructor(nombre, poder){
        this.nombre = nombre;
        this.poder = poder;
    }
}

class AvengerVolador63 extends Avenger63{
    constructor(nombre, poder){
        super(nombre, poder);
        this.vuela = true;
    }
}

let hulk = new Avenger63("Hulk", "Super Fuerza");
let falcon = new AvengerVolador63("Falcon", "Volar!");

console.log(hulk);
console.log(falcon);