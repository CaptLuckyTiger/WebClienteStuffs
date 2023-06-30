function calcularSomas(numeros) {
    let somaPares = 0;   // definição e inicialização de atributos
    let somaImpares = 0; // definição e inicialização de atributos
    let somaTotal = 0;   // definição e inicialização de atributos
  
    for (let i = 0; i < numeros.length; i++) {
      somaTotal += numeros[i];
  
      if (numeros[i] % 2 === 0) {
        somaPares += numeros[i];          
      } else {
        somaImpares += numeros[i];
      } 
    }
  
    return [somaPares, somaImpares, somaTotal];
  }
  
  // Solicitar números ao usuário
  const numerosStr = prompt('Digite os números separados por espaço:');
  const numeros = numerosStr.split(' ').map(num => parseInt(num));
  
  // Calcular as somas
  const [somaPares, somaImpares, somaTotal] = calcularSomas(numeros);
  
  // Imprimir os resultados
  console.log("Soma dos números pares:", somaPares);
  console.log("Soma dos números ímpares:", somaImpares);
  console.log("Soma total:", somaTotal);
  