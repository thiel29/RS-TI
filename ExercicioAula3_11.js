/* 11. Faça um programa que leia o ano de nascimento de uma pessoa, calcule a
idade dela e depois mostre se ela pode ou não votar.*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Qual o ano que vooê nasceu? ", (num) => {
  const idade = 2024 - parseInt(num);

  if (idade > 18) {
    console.log(`Você tem ${idade} anos, pode votar`);
  } else {
    console.log(`Você tem ${idade} anos, não pode votar`);
  }
  rl.close();
});
