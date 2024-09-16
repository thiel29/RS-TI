/* 5. Crie uma função assíncrona que simule um processo de três etapas
encadeadas, cada uma demorando 1 segundo. Mostre a sequência de
execução. */

function processStep(step) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(step);
    }, 1000);
  });
}

async function processSequence() {
  console.log(await processStep(1));
  console.log(await processStep(2));
  console.log(await processStep(3));
}

processSequence();
