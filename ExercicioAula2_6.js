/*6. Faça um programa que leia um número inteiro e mostre o seu antecessor e
seu sucessor.*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Informe um número inteiro:", (num) => {
  let antecessor = parseInt(num) - 1;
  let sucessor = parseInt(num) + 1;
  console.log(
    `O Antecessor de ${num} é ${antecessor} e o seu Sucessor é ${sucessor}.`
  );
  rl.close();
});
