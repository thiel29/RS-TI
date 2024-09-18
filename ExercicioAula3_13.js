/* 13.Desenvolva um programa que leia um número inteiro e mostre se ele é PAR
ou ÍMPAR. */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número: ", (num) => {
  const divisao = parseInt(num) % 2;

  if (divisao > 0) {
    console.log("Impar");
  } else {
    console.log("Par");
  }
  rl.close();
});
