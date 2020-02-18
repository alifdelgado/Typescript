function editable(esEditable:boolean){
    return function(target:any, nombrePropiedad:string, descriptor:PropertyDescriptor){
        if(!esEditable){
            console.warn('No me haran cambiar de opinion');
        }
        descriptor.writable = esEditable;
    }
}

class Villano112{
    constructor(nombre:string){}

    @editable(false)
    plan(){
        console.log("Es dominar el mundo");
    }
}

let lex112 = new Villano112("Lex Luthor");

lex112.plan = function(){
    console.log("Es cortar flores");
};

lex112.plan();