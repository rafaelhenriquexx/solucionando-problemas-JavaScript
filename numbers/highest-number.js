// Retorne o maior número da lista abaixo
//const numeros = '4, 5, 20, 8, 9';

const arr = numeros.split(',')
const max = Math.max(...arr);

console.log(max)