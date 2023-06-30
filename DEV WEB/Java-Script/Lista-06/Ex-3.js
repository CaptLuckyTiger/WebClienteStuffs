// Verifica se o navegador suporta a API de Geolocalização
if ('geolocation' in navigator) {
    // Solicita a localização do usuário
    navigator.geolocation.getCurrentPosition(function(position) {
      // Obtém as coordenadas do usuário
      var latitudeUsuario = position.coords.latitude;
      var longitudeUsuario = position.coords.longitude;
      
      // Coordenadas do ponto dado
      var latitudePontoDado = -25.09505351696433;
      var longitudePontoDado = -50.15454768669491;
      
      // Calcula a distância entre as coordenadas usando a fórmula de Haversine
      var distancia = calcularDistancia(latitudeUsuario, longitudeUsuario, latitudePontoDado, longitudePontoDado);
      
      // Exibe a distância no console
      console.log("Distância entre as coordenadas: " + distancia + " km");
    });
  } else {
    console.log("Geolocalização não suportada pelo navegador.");
  }
  
  // Função para calcular a distância entre duas coordenadas usando a fórmula de Haversine
  function calcularDistancia(lat1, lon1, lat2, lon2) {
    var R = 6371; // Raio da Terra em quilômetros
    var dLat = deg2rad(lat2 - lat1);
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var distancia = R * c;
    return distancia.toFixed(2); // Retorna a distância arredondada para 2 casas decimais
  }
  
  // Função auxiliar para converter graus em radianos
  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }
  