//const number = 10.55

//console.log(+number.toFixed() + 5)

//let valor = 72.52

//valor = valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

//console.log(valor)

//console.log(Math.floor(Math.random() * 100)); // entre 0 e 100)

// Retorne um número aleatório
// entre 1050 e 2000
//console.log(Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050)


// Retorne o maior número da lista abaixo
//const numeros = '4, 5, 20, 8, 9';

//const arr = numeros.split(',')
//const max = Math.max(...arr);

//console.log(max)


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total

/*
const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];

let taxa = 0;
function imprimirArray(transformarNumero){
   transformarNumero = +transformarNumero.replace('r$', '').replace('R$ ', '').replace(',', '.').trim();
   transformarNumero = +transformarNumero.toFixed(2)
   return transformarNumero;
}

listaPrecos.forEach((item) => {
 taxa += imprimirArray(item)
   })
   console.log(taxa)
   imprimirArray(listaPrecos)
   
   const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];

   function limparPrecos(listaPrecos) {
    let total = 0;
    const regex = /[^\d,]/g; // Expressão regular para remover caracteres não numéricos, exceto a vírgula
  
    listaPrecos.forEach((preco) => {
      const numeroLimpo = preco.replace(regex, '').replace(',', '.'); // Remover caracteres não numéricos e substituir ',' por '.'
      const numero = parseFloat(numeroLimpo); // Converter para número de ponto flutuante
      total += numero; // Adicionar ao total
    });
  
    return total.toFixed(2); // Retornar o total com duas casas decimais
  }
  
  const totalPrecos = limparPrecos(listaPrecos);
  console.log('Total dos preços: R$', totalPrecos);
  */