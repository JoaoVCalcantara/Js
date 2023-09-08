try {
    const resultado = calcular(0);
    console.log('resultado:', resultado);
} catch (Error) {
    console.log(Error.message)
} finally {
    console.log('Chegou no finally')
}
console.log('continua');

function calcular(valor) {
    if (valor == 0) {
        throw new Error('Não pode ser 0');
    }
    return valor / 2;
}