/* 16.Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos
para todos, mas especialmente para mulheres. Faça um programa que leia
nome, sexo e o valor das compras do cliente e calcule o preço com desconto.
Sabendo que: - Homens ganham 5% de desconto - Mulheres ganham 13%
de desconto. */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite seu nome: ", (nome) => {
  rl.question("Digite seu sexo (M / F):  ", (genero) => {
    rl.question("Digite o valor das suas compras: R$ ", (valor) => {
      if (genero == "F") {
        const precoDesconto = valor - valor * 0.13;
        console.log(`Sua compra com desconto é de: R$ ${precoDesconto}`);
      } else {
        const precoDesconto = valor - valor * 0.05;

        console.log(`Sua compra com desconto é de: R$ ${precoDesconto}`);
      }
      rl.close();
    });
  });
});
