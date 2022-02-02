//Estrutura de repetição
//for

//01
for (let i = 0; i <= 5; i++) { 
    console.log(i)
    if (i === 3) {
        break; // para a execução
    }
}

console.log('')

//02
for (let i = 10; i >= 1; i--) {
    if (i === 3) {
        continue; // ignora o 3
    }
    console.log(i)
}

console.log('')

//while - usado quando não sabe qual sera o momento de parada
let i = 5414546356345
while (i > 10) {
    console.log(i)
    i /= 35;
}

console.log('')




