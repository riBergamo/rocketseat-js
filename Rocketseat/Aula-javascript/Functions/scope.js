//function scope(escopo)
//01

let subject = 'create video'
function  createThink(subject) { // se tirar os parametros o 'study' se torna global quando chamarem subject  
    subject = 'study'
    return subject    
}

console.log(createThink(subject))
console.log(subject)

//02
let subject2

function createThink2() {
    subject2 = 'study'
}

console.log(subject2) //undefined
console.log(createThink2()) //toda função que nao tem return é undefined
console.log(subject2)
