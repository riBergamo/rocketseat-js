
//"CORREÇÃO" do exercicio2

let familia = {
    receitas: [950, 3100],
    despesas: [400, 1100, 150, 100, 50, 100, 100, 100, 200]
}
  
console.log(familia.receitas, familia.despesas)

function SomaArray(array) {
    let total = 0;
    for (let valores of array) {
        total += valores
    }
    return total
}

console.log(SomaArray(familia.receitas))
console.log(SomaArray(familia.despesas))

function ReceitasEDespesas() {
    const somaReceitas = SomaArray(familia.receitas)
    const somaDespesas = SomaArray(familia.despesas)

    const saldo = somaReceitas - somaDespesas

    const situacao = (familia.despesas > familia.receitas)?'salgo negativo':'saldo positivo'
    console.log(situacao)
    console.log('Saldo: ' + saldo)
}

ReceitasEDespesas()
  