/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/
const aluno = prompt('Nome do aluno')
alert('Vamos calcular as 3 notas finais do bimestre')
let matematica = prompt('Nota em matemática')
let portugues = prompt('Nota em português')
let ciencia = prompt('Nota em ciência')
let resultado = ((Number(matematica) + Number(portugues) + Number(ciencia)) / 3).toFixed()

let mensagem = resultado >= 6 ? alert(`PARABÉNS! ${aluno} Você passou no Bimestre, sua nota final é: ${resultado}`) : alert(`Poxa ${aluno}, você não passou no Bimestre, sua nota final é: ${resultado}. Mas não desista, você pode recuperar sua nota na prova de recuperação`)