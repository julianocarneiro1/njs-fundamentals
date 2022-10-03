const x = '10'

//checar se x é um número
if(!Number.isInteger(x)) {
    throw new Error('Não é um inteiro!')
}

console.log('Continuando o código')