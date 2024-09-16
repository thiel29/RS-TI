/* 1. Crie uma função assíncrona chamada getNumber que recebe um número
aleatório e o multiplica por 100 após 1 segundo. Use await para esperar a
resolução da Promise e retorne o número. */

function randomNumber(number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number * 100);
    }, 1000);
  });
}
async function getNumber() {
  const number = Math.random();
  let result = await randomNumber(number);
  return result;
}

getNumber().then(console.log);
