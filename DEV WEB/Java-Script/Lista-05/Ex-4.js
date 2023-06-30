function ordenar(numeros, callbackFn) {
    // Verificar se a entrada é um vetor
    if (!Array.isArray(numeros)) {
      throw new Error("A entrada deve ser um vetor.");
    }
  
    // Verificar se a função de callback é uma função
    if (typeof callbackFn !== "function") {
      throw new Error("A função de callback deve ser uma função.");
    }
  
    // Chamar a função de callback para realizar a ordenação
    return callbackFn(numeros);
  }
  
  // Exemplo de uso da função de ordenação
  var numeros = [5, 2, 8, 1, 9];
  
  var resultado = ordenar(numeros, function (arr) {
    // Implementação da função de callback para ordenação
    return arr.sort(function (a, b) {
      return a - b;
    });
  });
  
  console.log(resultado); // Output: [1, 2, 5, 8, 9]
  