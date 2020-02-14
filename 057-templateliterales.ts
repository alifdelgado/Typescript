let nombre157:string = "Bruce";
let nombre257:string = "Ricardo";

function getNombres():string{
    return `${nombre157} ${nombre257}`;
}

let mensaje57:string = `
1. Esta es una linea
2. Hola ${nombre157}
3. Hola ${nombre257}
4. Los nombres son: ${getNombres()}
5. ${5 + 7}`;

console.log(mensaje57);