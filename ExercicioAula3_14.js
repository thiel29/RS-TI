/*14.Faça um algoritmo que leia um determinado ano e mostre se ele é ou não
BISSEXTO. */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o ano: ", (num) => {
  const ano = parseInt(num) % 4;

  if (ano % 4 == 0) {
    console.log("É um ano bissexto");
  } else {
    console.log("Não é um ano bissexto.");
  }
  rl.close();
});
