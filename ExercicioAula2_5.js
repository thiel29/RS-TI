/*5. Faça um programa que leia as duas notas de um aluno em uma matéria e
mostre na tela a sua média na disciplina. */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite a primeira nota: ", (number1) => {
  rl.question("Digite a segunda nota: ", (number2) => {
    const media = (parseInt(number1) + parseInt(number2)) / 2;
    console.log(`A média final é: ${media}`);
    rl.close();
  });
});
