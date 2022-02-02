// throw - disparar/lançar

function sayMyName(name = '') {
    if (name === '') {
        throw new Error('Nome é obrigátorio') // tambem pode ser feito assim: throw 'Nome é obrigátorio'
    }
    console.log(name)
}

// try - tentar / cacth - capturar/pegar
// se não utilizar try/catch a aplicação é travda após o throw ser usado
try {
    sayMyName('Riri')
} catch(parametro) {
    console.log(parametro)
}

//ignora
function Nota(nota = '') {
    if (nota < 0 && nota > 100) {
        throw new Error('ERROR') // tambem pode ser feito assim: throw 'Nome é obrigátorio'
    }
}

try {
    Nota(nota)
} catch(parametro) {
    console.log(parametro)
}
