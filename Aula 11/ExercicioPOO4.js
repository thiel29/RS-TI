/* 4. Implemente uma classe chamada “Aluno” que possua atributos para
armazenar o nome, a matrícula e as notas de um aluno. Adicione métodos
para calcular a média das notas e verificar a situação do aluno (aprovado ou
reprovado).*/

class Aluno {
  constructor(nome, matricula, nota1, nota2, nota3) {
    this.nome = nome;
    this.matricula = matricula;
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.nota3 = nota3;
  }

  media() {
    const mediaNotas = (this.nota1 + this.nota2 + this.nota3) / 3;
    console.log(`A média do(a) ${this.nome} é: ${mediaNotas}!`);
    return mediaNotas;
  }

  situacao() {
    if (this.media() >= 7) {
      console.log(`${this.nome} foi aprovado(a)!`);
    } else {
      console.log(`${this.nome} foi reprovado(a)!`);
    }
  }
}

const alunos = new Aluno("Ana", 1040, 8, 9, 5);
//alunos.media();
alunos.situacao();
