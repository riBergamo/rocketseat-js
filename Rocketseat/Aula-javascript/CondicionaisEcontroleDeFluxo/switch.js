// Switch

//01
let patas = 'bípede'
switch (patas) {
    case 'bípede':
        console.log('bi')
        break;
    case "trípede":
        console.log('tri')
        break;
    default:
        console.log('default')
        break;
}

//02
function calculator(number1, operator, number2) {
    let result
    switch (operator) {
        case '+':
            result = number1 + number2
            break;
        case '-':
            result = number1 - number2
            break;
        case '*':
            result = number1 * number2
            break;
        case '/':
            result = number1 / number2
        default:
            break;
    }
    return result
}
console.log(calculator(2, '*', 3))


