//Pegando informações do processo

//process
console.log(process.argv)

// node Aula-nodeJS/process.js Riane Bergamo
console.log(process.argv[2], process.argv[3])

/*
    Passando flags como argumento
     node Aula-nodeJS/process.js --name "Riane" --greeting "Tudo bem? "
*/
console.log(process.argv[2], process.argv[3], process.argv[4], process.argv[5])
