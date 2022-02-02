// function hoisting: 
// - tipo de funçao que sofre elevação

// Nesse caso o js organiza o código como se colocasse a função antes do chamado(sofre elevação).
sayMyName();

function sayMyName() {
    console.log('Riri')
} 


// Nesse caso da erro pq nao sofre hoisting.(Erro)
MyName()

const MyName = function() {
    console.log('Riri')
}