function editable113(esEditable:boolean){
    return function(target:any, nombrePropiedad:string, descriptor:PropertyDescriptor){
        descriptor.writable = esEditable;
    }
}

function editableProp113(esEditable:boolean){
    return function(target:any, nombrePropiedad:string):any{
        let descriptor:PropertyDescriptor = {
            writable:esEditable
        }
        return descriptor;
    }
}

class Villano113{
    @editableProp113(false)
    public nombre:string;
    
    constructor(nombre:string){}

    @editable113(false)
    plan(){
        console.log("Es dominar el mundo");
    }
}

let lex113 = new Villano113("Lex Luthor");

lex113.plan = function(){
    console.log("Es cortar flores");
};

lex113.plan();