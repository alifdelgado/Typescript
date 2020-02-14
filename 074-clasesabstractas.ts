abstract class Mutantes{
    constructor(public nombre:string, public nombreReal:string){

    }
}

class Xmen74 extends Mutantes{
}

let wolverine74 = new Xmen74("Wolverine", "Logan");
console.log(wolverine74);