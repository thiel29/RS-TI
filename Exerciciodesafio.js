/*[DESAFIO] Crie um programa que leia o tamanho de três segmentos de reta.
Analise seus comprimentos e diga se é possível formar um triângulo com essas
retas. Matematicamente, para três segmentos formarem um triângulo, o
comprimento de cada lado deve ser menor que a soma dos outros dois.*/
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um numero: ", (num1) => {
  rl.question("Digite um numero: ", (num2) => {
    rl.question("Digite um numero: ", (num3) => {
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);
      num3 = parseFloat(num3);
      if (num1 < num2 + num3 && num2 < num1 + num3 && num3 < num1 + num2) {
        console.log("Não é possível formar um triângulo.");
      } else {
        console.log("É possível formar um triângulo.");
      }
      rl.close();
    });
  });
});
