// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor){
  const elements = document.querySelectorAll(seletor);
  this.element = elements;
  this.addClass = function(className) {
  elements.forEach((element) =>{
    element.classList.add(className)
  })
    };
    this.removeClass = function(className) {
      elements.forEach((element) =>{
        element.classList.remove(className)
      })
};
}
const agir = new Dom('a');

console.log(agir.addClass('Ativo'))




