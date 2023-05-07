// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const arrayItens = transportes.split(';');

console.log(arrayItens)

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;
              const htmlArray = html.split('span').join('a');

console.log(htmlArray)

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';

console.log(frase.charAt(frase.length - 1))