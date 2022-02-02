//01)Calcule a média de diversas notas digitadas pelo usuário.
let soma = 0;
let number = 0;
let media = 0;
for (let i = 1; i <= 3; i++){
    number = parseInt(prompt(i + "º nota: ", "1"), 10);
    soma += number;
    media = soma/i;
}
console.log('Média: ' + media);




