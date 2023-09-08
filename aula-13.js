const lista = [
    {
        nome : 'sla',
        idade : 12 ,
        cpf : 123
    },
    {
        nome : 'sala',
        idade : 1,
        cpf : 124 
    },
    {
        nome : 'slda',
        idade : 15,
        cpf : 125 
    },
    {
        nome : 'slaf',
        idade : 14,
        cpf : 126 
    },
    {
        nome : 'slaq',
        idade : 13,
        cpf : 12 
    },

]
const converterObjeto = (obejeto) =>{
    return obejeto.cpf
}

/*
return {
    ...obejeto pega tudo q esta no obejeto
}
*/

//console.log(lista.map((obejeto)=>obejeto.idade)); mesma coisa q a funcion de cima

console.log(lista.map(converterObjeto));

/*




*/