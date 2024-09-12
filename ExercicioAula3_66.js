// 66. Crie uma função que adiciona um elemento ao início do array e remove o último elemento.

let consoles = ["xbox", "playstation", "nintendo"];

const manipulacao = (array, elemento) => {
  array.unshift(elemento);
  array.pop();
  console.log(array);
};

manipulacao(consoles, "mega");
