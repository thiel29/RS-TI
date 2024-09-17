/* 7. Crie uma função assíncrona que simula a contagem regressiva usando um
loop while, com atraso de 1 segundo entre cada número.*/

function contagem(i) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

async function conta(i) {
  /* Sempre que usar o async precisa ser utilizado o await para questão de atraso no tempo*/
  while (i > 0) {
    console.log(i);
    await contagem();
    i--;
  }
  console.log("FIM!"); /* mensagem que aparece após o resultado*/
}

conta(5);
