let consoles = ["xbox", "playstation", "nintendo"];

const manipulacao = (array, posicao, elemento) => {
  array[posicao] = elemento;
  console.log(array);
};

manipulacao(consoles, 2, "PC");
