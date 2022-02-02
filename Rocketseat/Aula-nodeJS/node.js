//node Aula-nodeJS/node.js
//
global.console.log('hello world') 

//globais:
//Diretório local, onde está o arquivo que estamos executando
console.log(__dirname)

//Caminho completo + nome do arquivo sendo executado
console.log(__filename)

/*
    Módulos Nativos
        require(argumento)
            - é um objeto
            - maneira de chamar módulos que já tem no node ou que podemos criar/instalar 
        'path' = modulo que ja existe dentro do node
*/

const path = require('path')
console.log(path.basename(__filename))

/*
    Meus Módulos
        - pode atribuir a ele qualquer coisa, um array, uma string, etc
*/

const myModule = require('./teste.js')//nome da pasta que está contendo
console.log(myModule)

//Pegando informações do processo
//process
console.log(process.argv)
// node Aula-nodeJS/node.js Riane Bergamo
console.log(process.argv[2], process.argv[3])

//Passando flags como argumento
//node Aula-nodeJS/node.js --name "Riane" --greeting "Tudo bem? "
console.log(process.argv[2], process.argv[3], process.argv[4], process.argv[5])

//Lista de argumentos





























