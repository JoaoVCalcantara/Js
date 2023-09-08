class Usuario{
email;
passoword;
nome;

constructor(email,passoword,nome){
    this.email=email;
    this.passoword=passoword;
    this.nome=nome;
}


}
class Administrador extends Usuario{
    permissoes;
    constructor(email,passoword,nome,permissoes){
        super(email,passoword,nome);//o pai do construction de cima
        this.permissoes=permissoes;
    }


}
class Comprador extends Usuario{
    compras;


}

const sla = new Administrador('a@a','123','jojo',[1,5]);
const comprador = new Comprador();
comprador.passoword= '23522';

console.log(sla.nome);
console.log(comprador); 