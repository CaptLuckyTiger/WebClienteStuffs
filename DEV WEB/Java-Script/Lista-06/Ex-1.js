class Retangulo {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
  }

  area() {
    return this.base * this.altura;
  }
}

class Triangulo {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
  }

  area() {
    return (this.base * this.altura) / 2;
  }
}


var retangulo = new Retangulo(4, 5);
console.log("Área do Retângulo: " + retangulo.area()); 

var triangulo = new Triangulo(3, 6);
console.log("Área do Triângulo: " + triangulo.area()); 
