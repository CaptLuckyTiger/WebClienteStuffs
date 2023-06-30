class Poligono {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
  }
}

class Retangulo extends Poligono {
  calcularArea() {
    return this.base * this.altura;
  }
}

class Triangulo extends Poligono {
  calcularArea() {
    return (this.base * this.altura) / 2;
  }
}


const retangulo = new Retangulo(5, 3);
console.log('Área do retângulo:', retangulo.calcularArea()); // Saída: 15

const triangulo = new Triangulo(4, 6);
console.log('Área do triângulo:', triangulo.calcularArea()); // Saída: 12
