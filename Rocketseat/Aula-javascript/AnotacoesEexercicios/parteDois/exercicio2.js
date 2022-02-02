/*
    02
    Sistema de gastos familiares
      Objeto com 2 propriedades, do tipo Array
        - receitas[]
        - despesas[]

    Depois, crie uma funçao que irá 
    - calcular o total de receitas e despesas
    - mostrar uma mensagem se a família esta com saldo positivo ou negativo, seguido do valor do saldo.
*/
let objeto = {
  receitas: [950, 3100],
  despesa: [400, 1100, 150, 100, 50, 100, 100, 100, 200]
}

console.log(objeto.receitas)
console.log(objeto.despesas)

totalDespesas = 0
function ReceitasEDespesas() {
  totalReceitas = objeto.receitas[0] + objeto.receitas[1]

  for (let i = 0; i < despesas.length; i++) {
    totalDespesas += objeto.despesas[i]
  }

  let saldo = totalReceitas - totalDespesas

  return 'O saldo está positivo. Saldo: ' + saldo
}

console.log(ReceitasEDespesas())

//400, 1.100, 150, 100, 50, 100, 100, 100, 200
//'mercado', 'Aluguel e condomínio', 'internet', 'gás', 'agua', 'luz', 'academia', 'lazer', 'transporte'

//"CORREÇÃO"

let familia = {
  receitas = [950, 3100],
  despesas = [400, 1100, 150, 100, 50, 100, 100, 100, 200]
}

console.log(receitas, despesas)





