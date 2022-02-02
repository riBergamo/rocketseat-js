//function anonymous(anônima, sem nome)

//parâmetros(parameters) = (number1, number2)
const sum = function(number1, number2) {
    let total = number1 + number2 //Se não houver declaração(let, const) da variável ela existe fora do escopo
    return total//pra nao dar undefined
}

let number1 = 34
let number2 = 25
sum(number1, number2)

console.log("O número 1 é " + number1)
console.log("O número 2 é " + number2)
console.log("A soma entre eles é " + sum(number1, number2))