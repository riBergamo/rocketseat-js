// function constructor
/*   - expressão new
     - criar um novo objeto
     - this.keyword           */

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}
const riane = new Person('Riane')
const joao = new Person('João')
console.log(riane.walk())
console.log(joao.walk())

//Mostra a cadeia de carac e a quant

let name2 = new String('Riane')
console.log(name2)


