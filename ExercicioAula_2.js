/* 
2. Crie uma função assíncrona chamada sum onde o primeiro valor da parcela
é 70 e o segundo valor será passado como argumento para a função. O
atraso deve ser de 1 segundo. Use await para esperar a resolução da
Promise e retorne o resultado da soma.*/

function sum(parcela) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(70 + parcela), 1000);
  });
}

async function parcela(number) {
  let result = await sum(number);
  console.log(result);
}

parcela(20);
