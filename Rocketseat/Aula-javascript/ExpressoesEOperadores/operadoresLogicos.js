//Operadores lógicos
// 2 valores booleanos.
 let pao = true
 let queijo = false

 // and: '&&'
 console.log(pao && queijo)

 let res = (pao && queijo)?'Eu':'Eu não'
 console.log(res + " gosto de comer pão e queijo")

 // or: '||'
 console.log(pao || queijo)

 // not: '!' 
 // quando usado, ele nega o valor dado (false vira true, true vira false)
 console.log(pao && !queijo) 
