const readline = require ('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl. question('Escreva seu nome: ', (nome) => {
console.log(`Olá, ${nome}!`)

rl.close();
});

