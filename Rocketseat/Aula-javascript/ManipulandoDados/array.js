//Manipulando array

//01
let arraySimple = ['1', '2', '3']
console.log(arraySimple)

//02) o elemento tambem pode ser um tipo de dado diferente.Como function, type e etc
let arrayElementDifferent = [
    'a',
    {type: "array"}, 
    function() {return "array"}
]
console.log(arrayElementDifferent)

//Array com construtor
let myArray = new Array('a', 'b', 'c')
console.log(myArray)

//Mostrar apenas quantos elementos o array tem ([].lenght)
console.log(['a', 'b', 'c'].length)

//Array com function
// [][2]:mostra que na position [2] tem uma função
//():executa a function
console.log(['a', 'b', function() {return "Oi"}][2]())

//Tranformando uma cadeia de caracteres(strings) em elementos de um array
let word = "Eu te amo ta ouvindo grr"
console.log(Array.from(word))

//
let techs = ['html', 'css', 'js']

//  Adicionar um item no fim
techs.push('nodejs')
//  Adicionar um no começo
techs.unshift('sql')
//  Remover do fim, cada vez q utilizar ele remove um elemento.
techs.pop()
//  Remover do começo
techs.shift()
//  Pegar somente alguns elementos do array: vai mostrar apenas o elemento que tiver entre os parametros dados.(a partir do a, até antes do b)
console.log(techs.slice(1, 3))
//  Remover 1 ou mais itens em qualquer posição do array: (apartir de a, quant de elementos para tirar) 
techs.splice(1, 1)
//  Encontrar a posição de um elemento array
let index = techs.indexOf('js')

console.log(index)
console.log(techs)







