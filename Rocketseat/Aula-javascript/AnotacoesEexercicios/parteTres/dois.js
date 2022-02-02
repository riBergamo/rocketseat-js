//02) Peça ao usuário para digitar 5 números em uma caixa de texto. Verifique qual é o maior número e exiba-o.
let number;
let maior = 0;
for (let i = 1; i <= 5; i++){
    number = window.prompt(i + "º número: ");
    if (number > maior) {
        maior = number;
    }
}
console.log(maior)

