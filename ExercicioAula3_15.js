/* 15.Escreva um programa que leia o ano de nascimento de um rapaz e mostre a
sua situação em relação ao alistamento militar. - Se estiver antes dos 18
anos, mostre em quantos anos faltam para o alistamento. - Se já tiver depois
dos 18 anos, mostre quantos anos já se passaram do alistamento.*/
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Em que ano você nasceu? ", (num) => {
  const ano = 2024 - parseInt(num);
  if (ano > 18) {
    console.log(`Passaram ${ano} anos do seu alistamento militar.`);
  } else {
    console.log(`Faltam ${ano} anos para o seu alistamento militar.`);
  }
  rl.close();
});
