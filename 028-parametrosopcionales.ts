function nombreCompleto(nombre:string, apellido?:string):string{
    if(apellido){
        return nombre + ' ' + apellido;
    } else {
        return nombre;
    }
}

let nombre28 = nombreCompleto("Barry");
console.log(nombre28);