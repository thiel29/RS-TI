let consoles = ["xbox", "playstation", "nintendo"];

const manipulacao = (array, elemento) => {
  array.push(elemento);
  console.log(array);
};

manipulacao(consoles, "mega drive");
