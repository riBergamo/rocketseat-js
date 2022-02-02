// Expressões e Operadores
/*
    - Expressions 
        Qualquer linha de cod que resolve alguma coisa 
*/
let number = 1;

/*
    - Operators
        Binary
        Unary
        Ternary (expressao ? isso:aquilo)
*/

//Unary: operador(++, typeof, etc) e só um elemento(number)
console.log(++number)
//Binary: dois elementos
console.log(number + 1)
//Ternary único: (expressao ? isso:aquilo)
let number2 = 1;
console.log(true ? 'Oi' : 'nada')


/*
    Expressão new
    - left-hand-side expression
    - Usada para criar um novo ojeto
*/

let name = new String('Riane')
name.surName = "Bergamo"
let age = new Number(19)
console.log(name, age)

//new Date

let date = new Date("2021-11-01")
console.log(date)

/*
    Operadores unários
     - Mais comuns:
         - typeof
         - delete
*/
const person = {
    name:"Riane",
    age: 19
}
delete person.age
console.log(person)
console.log(typeof person)
