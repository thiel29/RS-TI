/* 
6.Dado um array de números, crie uma função assíncrona que multiplique por 2
cada número e retorne um novo array com os resultados.*/

let array = [1, 5, 7, 4, 3, 9];
let modifiedarray = array.map(function (Number) {
  return Number * 2;
});
console.log(modifiedarray);
