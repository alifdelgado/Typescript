function sumar(a:number, b:number):number{
    return a + b;
}

function saludar(nombre:string):string{
    return "I'm " + nombre;
}

function salvarMundo():void{
    console.log("El mundo esta salvado");
}

let miFuncion:(a:number, b:number)=>number;
miFuncion = sumar;
console.log(miFuncion(5,5));