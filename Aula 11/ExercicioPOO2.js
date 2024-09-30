2; /*Implemente uma classe chamada “ContaBancária” que possua atributos para
armazenar o número da conta, nome do titular e saldo. Adicione métodos
para realizar depósitos e saques.*/

class Contabancaria {
  constructor(numeroConta, nomeTitular, saldo) {
    this.numeroConta = numeroConta;
    this.nomeTitular = nomeTitular;
    this.saldo = saldo;
  }

  deposito(valor) {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo += valor;
      console.log(
        `Depósito de R$ ${valor} realizado. Saldo atual: R$${this.saldo}`
      );
    } else {
      console.log("O valor do depósito deve ser positivo.");
    }
  }

  saque(valor) {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      console.log(
        `Saque de R$${valor} realizado com sucesso! Saldo atual: R$${this.saldo}`
      );
    } else {
      console.log("Saldo suficiente.");
    }
  }
}
const minhaContabancaria = new Contabancaria("014586", "Ana", 1000);
minhaContabancaria.deposito(550);
minhaContabancaria.saque(200);
