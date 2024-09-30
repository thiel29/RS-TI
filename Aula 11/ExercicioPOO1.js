/*1. Crie uma classe chamada “Círculo” que possua um atributo para armazenar o
raio e métodos para calcular a área e o perímetro do círculo.*/

class Circulo {
  constructor(raio) {
    this.raio = raio;
  }

  area() {
    console.log(Math.PI * this.raio ** 2);
  }

  perimetro() {
    console.log(2 * Math.PI * this.raio);
  }
}

const meuCirculo = new Circulo(6);
meuCirculo.area();
meuCirculo.perimetro();
