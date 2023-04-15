// Transforme o objeto abaixo em uma Constructor Function

const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' tirou sua habilitação');
  }
}

function Pessoa(nome, idade){
  this.nome = nome,
  this.idade = idade,
  this.andar = function() {
   return `${this.nome} tirou sua habilitação com ${this.idade} anos`;
  }
}
const pessoaUm = new Pessoa('Karin Oliveira', 21)

console.log(pessoaUm.andar())

const pessoaDois = new Pessoa('Kaique Machado', 20)

console.log(pessoaDois.andar())