document.addEventListener("DOMContentLoaded", function() {
    var quadrados = document.querySelectorAll(".quadrado");
    var jogadorX = true;

    quadrados.forEach(function(quadrado) {
      quadrado.addEventListener("click", function() {
        if (!quadrado.textContent) {
          quadrado.textContent = jogadorX ? "X" : "O";
          jogadorX = !jogadorX;
        }
      });
    });
  });