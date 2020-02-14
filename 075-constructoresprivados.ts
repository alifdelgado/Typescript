class Apocalipsis{
    static instancia:Apocalipsis;
    private constructor(public nombre:string){
    }

    static llamarApocalipsis(){
        if(!Apocalipsis.instancia){
            Apocalipsis.instancia = new Apocalipsis("Soy el verdadero apocalipsis!!!")
        }
        return Apocalipsis.instancia;
    }
}

let real = Apocalipsis.llamarApocalipsis();
console.log(real);