/*  9. Crie um programa que leia o número de dias trabalhados em um mês e
mostre o salário de um funcionário, sabendo que ele trabalha 8 horas por dia
e ganha R$25 por hora trabalhada.*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Quantos dias você trabalhou?", (dias) => {
  const horasMes = parseInt(dias) * 8;
  const valorMes = horasMes * 25;
  console.log(`Seu sálario é de R$ ${valorMes}`);
  rl.close();
});
