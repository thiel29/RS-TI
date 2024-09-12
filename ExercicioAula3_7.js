/* 7. Crie uma função que insere um elemento em uma posição específica de um
array. O índice e o elemento a ser inserido devem ser passados como argumentos. */

let frutas = ["morango", "uva", "pera", "abacaxi"];

const manipulacao = (array, posicao, elemento) => {
  array[posicao] = elemento;
  console.log(array);
};

manipulacao(frutas, 3, "laranja");
