/* 
3 .Crie uma função assíncrona chamada divide que divide dois números, mas
retorna uma Promise rejeitada se o divisor for zero. Capture e exiba o erro
usando try/catch.*/

function divide(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("O divisor não pode ser 0");
    } else {
      resolve(a / b);
    }
  });
}

async function execDivide() {
  try {
    const result = await divide(7, 0);
    console.log(result);
  } catch (erro) {
    console.log(erro);
  }
}

execDivide();
