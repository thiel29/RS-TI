/* 10.Escreva um programa que pergunte a velocidade de um carro. Caso
ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi multado
e exiba o valor da multa, cobrando R$5 por cada Km acima da velocidade
permitida. */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite a velocidade do carro: ", (num) => {
  const media = (parseInt(num) - 80) * 5;
  if (num > 80) {
    console.log(`Você foi multado! Pague sua multa R$ ${media}!`);
  } else {
    if (num < 80) console.log(`Você está na velocidade permitida!`);
  }

  rl.close();
});
