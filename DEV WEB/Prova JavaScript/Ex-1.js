function calcular(operador) {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var resultado = document.getElementById("resultado");

    if (isNaN(num1) || isNaN(num2)) {
      resultado.value = "Entradas inválidas";
      return;
    }

    switch (operador) {
      case "+":
        resultado.value = num1 + num2;
        break;
      case "-":
        resultado.value = num1 - num2;
        break;
      case "/":
        resultado.value = num1 / num2;
        break;
      case "*":
        resultado.value = num1 * num2;
        break;
      default:
        resultado.value = "Operador inválido";
        break;
    }
  }