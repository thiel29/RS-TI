/* 12.Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a
sua média e mostre na tela. No final, analise a média e mostre se o aluno
teve ou não um bom aproveitamento (se ficou acima da média 7.0). */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o nome do aluno: ", (aluno) => {
  rl.question("Digite a primeira nota do aluno: ", (nota1) => {
    rl.question("Digite a segunda nota do aluno: ", (nota2) => {
      const media = (parseInt(nota1) + parseInt(nota2)) / 2;

      if (media > 7.0) {
        console.log(
          `Sua nota média é: ${media}. Você teve um bom aproveitamento!`
        );
      } else {
        if (media < 7.0) {
          console.log(
            `Sua nota média é: ${media}. Você precisa dedicar mais nos estudos.`
          );
        }
      }
      rl.close();
    });
  });
});
