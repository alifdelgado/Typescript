interface DosNumerosFunc{
    (num1:number, num2:number):number
}

let sumar82:DosNumerosFunc;

sumar82 = function(a:number, b:number){
    return a + b;
}

let restar82:DosNumerosFunc;
restar82 = function(numero1:number, numero2:number){
    return numero1 - numero2;
}