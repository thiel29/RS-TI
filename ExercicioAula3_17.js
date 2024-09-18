/* 17.Faça um algoritmo que pergunte a distância que um passageiro deseja
percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km
para viagens até 200Km e R$0.45 para viagens mais longas.*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite a distância que deseja percorrer em KM: ", (distancia) => {
  if (distancia > 200) {
    const precoKm = distancia * 0.45;
    console.log(`O valor da sua viagem é de R$ ${precoKm}`);
  } else {
    const preco = distancia * 0.5;
    console.log(`O valor da sua viagem é de R$ ${preco}`);
  }
  rl.close();
});
