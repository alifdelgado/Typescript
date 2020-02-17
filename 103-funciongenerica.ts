function functionGenerica<T>(arg:T){
    return arg;
}

type Heroe = {
    nombre:string;
    nombreReal:string;
};

type Villano = {
    nombre:string;
    poder:string;
};

let deadpool = {
    nombre: "Deadpool",
    nombreReal: "Wade Winston Wilson",
    poder: "Regeneración"
};

console.log(functionGenerica<Villano>(deadpool));