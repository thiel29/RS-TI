/*7. Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em
R$) e mostre quantos dólares ela pode comprar. Considere US$1,00 =
R$5,60.*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`Digite um valor em reais para converter em dolár:`, (num) => {
  const conversao = parseFloat(num) / 5.6;
  console.log(conversao.toFixed(2));
  rl.close();
});
