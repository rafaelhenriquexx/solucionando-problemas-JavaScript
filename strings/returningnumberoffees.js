// Retorne o total de taxas

const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let totalString = 0;
transacoes2.forEach((item) => {
  item = item.toLowerCase().trim().includes('taxa')
  
    totalString += item;
  
})
console.log(totalString)
 