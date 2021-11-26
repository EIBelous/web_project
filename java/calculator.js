

let calculate=function(firstNumber,secondNumber,operator){
    if (operator==='+'){
        return Number(firstNumber) + Number(secondNumber) }
    if (operator==='-'){
        return Number(firstNumber) - Number(secondNumber)  }
    if (operator==='*'){
        return Number(firstNumber) * Number(secondNumber) }
    if (operator==='/'){
        return Number(firstNumber) / Number(secondNumber)  }}
console.log(calculate(2,1,`-`))