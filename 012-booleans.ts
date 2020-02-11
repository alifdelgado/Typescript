let esSuperman:boolean = true;
let esBatman:boolean = true;
let esAcuaman:boolean = true;

if(esSuperman){
    console.log("Estamos salvado!!!");
} else {
    console.log("Oooohhhhh Oooopps!");
}

esSuperman = convertirClark();

if(esSuperman){
    console.log("Estamos salvado!!!");
} else {
    console.log("Oooohhhhh Oooopps!");
}

function convertirClark(){
    return false;
}