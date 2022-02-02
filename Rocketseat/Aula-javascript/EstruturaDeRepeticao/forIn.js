//for in

//01
let person = {
    name: 'Riane',
    age: 19,
    weight: 56.4
}

for (let property in person) {
    //console.log(property)
    console.log(property + ':' + person[property]) //assim mostra o valor das propriedades
}