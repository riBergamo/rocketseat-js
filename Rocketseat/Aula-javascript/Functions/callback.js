// callback(chamar de volta) functions
// - Uma função passando como parâmetro para outra função(a função dentro da função)

function sayMyName(name) {
    console.log('antes da callback')
    name()   
    console.log('depois da callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback') //"substitui" o name()
    }
)










