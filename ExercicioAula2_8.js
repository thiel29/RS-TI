/* 8. Faça um algoritmo que leia a largura e altura de uma parede e mostre a área
a ser pintada e a quantidade de tinta necessária para o serviço, sabendo que
cada litro de tinta pinta uma área de 2 metros quadrados.*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite a altura:", (num1) => {
  rl.question("Digite a largura:", (num2) => {
    const media = (parseInt(num1) * parseInt(num2)) / 2;
    console.log(`Você precisará de ${media} litros de tinta.`);
    rl.close();
  });
});

/* rl.question("Digite a altura:", (altura) => {
  rl.question("Digite a largura:", (largura) => {
    rl.question("Digite o rendimento da tinta:", (rendimento) => {
      const media =
        (parseFloat(altura) * parseFloat(largura)) / parseFloat(rendimento);
      console.log(`Você precisará de ${media} litros de tinta.`);
      rl.close();
    });
  });
}); */
