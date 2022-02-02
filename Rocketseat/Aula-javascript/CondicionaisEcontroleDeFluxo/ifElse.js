//if / else (se / senão)
if (true) { //condição escrita aqui deve ser verdadeira

}else{

}

//01
let temperature = 38
let hightTemperature = temperature >= 37.5
let mediumTemperature = temperature >= 37 && temperature < 37.5

if (hightTemperature){
    console.log('Está com febre alta')
} else if (mediumTemperature) {
    console.log('Está com febre moderada')
} else {
    console.log('Está normal')
}
