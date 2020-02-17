class Villano112{
    constructor(nombre:string){}

    plan(){
        console.log("Es dominar el mundo");
    }
}

let lex112 = new Villano112("Lex Luthor");

lex112.plan = function(){
    console.log("Es cortar flores");
};

lex112.plan();