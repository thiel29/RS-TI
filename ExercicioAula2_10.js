/* 10.Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o
seu novo salário, com 15% de aumento*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o seu sálario:", (salario) => {
  const media = parseInt(salario) * 0.15;
  const soma = parseInt(salario) + parseInt(media);
  console.log(`Seu novo sálario é de ${soma}`);
  rl.close();
});
