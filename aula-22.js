
class Pessoa{
    nome;
    idade;
    filhos;



    qntfilhos(){
        if(this.filhos){
            return this.filhos.length;
        }
        return 0;
    }

    constructor(nome,idade,filhos){
        this.nome=nome;
        this.idade=idade; 
        this.filhos=filhos;
    }
}

const filho1 = new Pessoa('asdasd',23);
const filho2= new Pessoa('lala',53);

console.log(filho1.qntfilhos());

const pessoa = new Pessoa('a',12,[filho1,filho2]);

console.log('quantos filhos', pessoa.qntfilhos());
//console.log( pessoa);