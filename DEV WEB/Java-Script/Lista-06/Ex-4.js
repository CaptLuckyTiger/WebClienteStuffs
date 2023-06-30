function exibirAlertaPausa() {
    setInterval(function() {
      alert("Faça uma pausa rápida no trabalho!");
    }, 5*1000); // 60 minutos * 60 segundos * 1000 milissegundos
  }
  
  // Chamar a função para iniciar os alertas
  exibirAlertaPausa();
  