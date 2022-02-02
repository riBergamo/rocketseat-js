/*
    Celsius em fahrenheit
    - crie uma função que receba uma string em celsius ou fahrenheit
    e faça a a transformação de uma unidade para outra

    C = (F - 32) * 5/9    f > c
    F = C * 9/5 + 32      c > f
*/

function Transformacao(escalaTermométrica, temp) {
    if (escalaTermométrica === 'celsius') {
        fahrenheit = temp * 9 / 5 + 32
        return 'Celsius em fahrenheit: ' + fahrenheit
    } else {
        celsius = (temp - 32) * 5/9
        return 'Fahrenheit em celsius: ' + celsius
    }
}

console.log(Transformacao('celsius', 28))
