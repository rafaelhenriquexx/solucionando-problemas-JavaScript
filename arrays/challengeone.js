// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];

const primeiraComida = comidas.shift()
const ultimaComida = comidas.pop()
const primeiraComidaArmazenada = primeiraComida.toUpperCase()
const ultimaComidaArmazenada = ultimaComida.toUpperCase()
const arroz = comidas.push('Arroz')
const peixeBatata = comidas.unshift('Peixe', 'Batata')
console.log(ultimaComidaArmazenada + ' na Caixa')
console.log(primeiraComidaArmazenada + ' na Caixa')
console.log(comidas)
