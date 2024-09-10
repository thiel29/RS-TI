const readline = require ('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe o primeiro número: ', (numero1) => { 
rl.question('Informe o segundo número: ', (numero2) => {

console.log(`O Resultado é: ${parseInt(numero1) + parseInt(numero2)}`)
// console.log('O Resultado é: ', parseInt(numero1) + parseInt(numero2))

rl.close();
})

});