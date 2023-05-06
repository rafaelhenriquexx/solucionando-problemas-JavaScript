// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let taxa = 0;
let recebimento = 0;
transacoes.forEach((item) =>{
const transformarNumero = +item.valor.replace('R$ ', '')
 if(item.descricao.includes('Taxa')){
  taxa += transformarNumero
 }else{
   recebimento += transformarNumero
 }
})
//console.log(`O Recebimento da taxa é: R$ ${taxa}`)
//console.log(`O Recebimento de cliente é: R$ ${recebimento}`)