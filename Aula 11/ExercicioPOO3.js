/*3. Crie uma classe chamada “Retângulo” que possua atributos para armazenar
a largura e a altura. Implemente métodos para calcular a área e o perímetro
do retângulo.*/

class Retangulo {
  constructor(largura, altura) {
    this.largura = largura;
    this.altura = altura;
  }

  area() {
    console.log(this.largura * this.altura);
  }

  perimetro() {
    console.log((this.largura + this.altura) * 2);
  }
}
const meuRetangulo = new Retangulo(20, 10);
meuRetangulo.area();
meuRetangulo.perimetro();
