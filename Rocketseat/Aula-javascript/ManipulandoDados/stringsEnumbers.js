// Manipulando strings e números

//  - Transformar string em número e número em string
let string = "123"
console.log("Number: " + Number(string))
let number = 321
console.log("String: " + String(number))

//Contar quantos caracteres tem uma palavra e quantos dígitos tem um número
let word = "paralelepipedo"
console.log(word.length)

let number2 = 123
console.log(String(number2).length)

//Transformar um número quebrado em um com 2 casas decimais (.toFixed()), e trocar ponto por vírgula (.replace)
let number3 = 442.43244
console.log(number3.toFixed(2).replace(".", ","))// pela troca de "." por "," o number3 não pode ser transformado em número, ele é uma string

//Maiúsculas e minúsculas
let word2 = "Fazer programa é muito bom"
console.log(word2.toUpperCase())//maiusculas
console.log(word2.toLowerCase())//minusculas

//Separando strings
//Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array.Depois, tranforme o array em um texto onde eram os espaços, e coloque _

let phrase = "Eu quero viver um amor!"
let myArray = phrase.split(" ")
console.log(myArray)
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toUpperCase())

//Verificar se o texto contém uma palavra específica 
console.log(phrase.includes("amor")) //includes é sensivel a letras maiusc, minus, acentos, etc 



