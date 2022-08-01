

let numberOne = Number(prompt("Insira o primeiro número:"))
let numberTwo = Number(prompt("Insira o segundo número:"))

alert(`A soma dos dois números é: ${(numberOne + numberTwo).toFixed(2)}`)
alert(`A subtração dos dois números é: ${(numberOne - numberTwo).toFixed(2)}`)
alert(`A multiplicação dos dois números é: ${(numberOne * numberTwo).toFixed(2)}`)
alert(`A divisao dos dois números é: ${(numberOne / numberTwo).toFixed(2)}`)
alert(`O resto da divisão dos dois números é: ${(numberOne % numberTwo).toFixed(2)}`)


soma = Number((numberOne + numberTwo).toFixed(2))

if(soma % 2 === 0){
alert(`A soma dos dois números é um número par`)
}else {
  alert(`A soma dos dois números é um número impar`)
}

if (numberOne === numberTwo) {
alert("Os números inseridos sao iguais")
} else {
  alert("Os números inseridos sao diferentes")
}