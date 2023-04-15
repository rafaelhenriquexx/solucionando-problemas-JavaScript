
let valor = 72.52

valor = valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

console.log(valor)