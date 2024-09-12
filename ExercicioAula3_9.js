/*Crie uma função que move um elemento de uma posição para outra em um
array utilizando os métodos splice e push. O índice original e o novo índice
devem ser passados como argumentos.*/

let array = [1, 3, 5, 10];
const manipulacao = (array, incideOriginal, novoIndice) => {
  const [elemento] = array.splice(incideOriginal, 1);
  array.splice(novoIndice, 0, elemento);
  console.log(array);
};

manipulacao(array, 2, 0);
