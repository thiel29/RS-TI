const readline = require ('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe seu nome: ', (nome) => {
    rl.question('Informe seu sálario: ', (salario) => {
        console.log(`Olá, ${nome} recebe R$${salario} por mês`)
        rl.close();
    })
})