/*
    Type convertion (typecasting) X Type coersion
        - Servem para a alteração de um tipo de dado para outro tipo

    Type convertion: Explicitamente altero um dado de um tipo para outro tipo. Capacidade do programador de fazer a troca.

    Type coersion: Js implicitamente fazendo o mesmo.Capacidade do js de fazer a troca.
*/

console.log('9' + 5) // (Type coersion) o js muda o tipo do 5 de number para string sem que percebemos, para nao haver problemas no código - desse jeito os números sao colocados juntos(95)

console.log(Number('9') + 5)// (Type convertion) eu mudo manualmente o código - desse jeito a soma é feita(14)




