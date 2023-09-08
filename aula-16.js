const lista = [
    {
        nome: 'Jose',
        idade: 13,
        exibir: true,
    },
    {
        nome: 'Joao',
        idade: 42
    },
    {
        nome: 'Maria',
        idade: 23
    },
    {
        nome: 'Gabriela',
        idade: 25
    },
    {
        nome: 'Fernanda',
        idade: 65
    },
    {
        nome: 'André',
        idade: 69
    },
    {
        nome: 'Heitor',
        idade: 32
    },
    {
        nome: 'Gustavo',
        idade: 64
    },
    {
        nome: 'Sandra',
        idade: 33
    },
]

const novaP = lista.find((pessoa) =>pessoa.idade>40 && pessoa.nome=="Joao");
//find ira sempre parar na primeira pessoa q estiver com a condição verdadeira, passando para
console.log(novaP);