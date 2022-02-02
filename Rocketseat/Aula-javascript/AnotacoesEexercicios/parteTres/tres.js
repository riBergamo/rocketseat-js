//03) Peça ao usuário para digitar várias idades. Exiba quantas pessoas são maior de idade (18 anos) e quantas são menores.
let age, over18 = 0, under18 = 0;
for (let i = 0; i < 5; i++) {
    age = window.prompt("Idade: ");
    if (age >= 18) {
        over18++;
    } else {
        under18++;
    }
}
console.log("Pessoas com mais de 18 anos: " + over18)
console.log("Com menos de 18 anos: " + under18)



