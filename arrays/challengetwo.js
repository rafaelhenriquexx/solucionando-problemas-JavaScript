// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const carrosNovos = ['Ford', 'Fiat', 'VW', 'Honda'];

let cloneArray = [];
cloneArray = cloneArray.concat(carrosNovos)
const removerUltimoItem = cloneArray.pop()

console.log(carrosNovos)
console.log(cloneArray)

