var vetor = [2, 4, 6, 5, 10, 15, 20];

var resultado = vetor.map(function(elemento) {
  return elemento % 2 === 0 ? 'par' : 'impar';
});

console.log(resultado);
