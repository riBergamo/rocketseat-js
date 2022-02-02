//Exercícios

/*
    01
    Tranformar notas escolares de número para caractere
     > 90 = A
     > 80 && < 89 = B
     > 70 && < 79 = C
     > 60 && < 69 = D
     < 60 = F
*/

function Notas(nota) {
    if (nota >= 90 && nota <= 100) {
        nota = 'A'
    } else if (nota >= 80 && nota <= 89) {
        nota = 'B'
    } else if (nota >= 70 && nota <= 79) {
        nota = 'C'
    } else if (nota >= 60 && nota <= 69) {
        nota = 'D'
    } else if (nota < 60 && nota >= 0) {
        nota = 'F'
    } else {
        return 'Nota inválida'
    }
    return nota
}

console.log(Notas(80))
console.log(Notas(101))
console.log(Notas(-1))



