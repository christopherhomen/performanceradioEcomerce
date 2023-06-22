document.addEventListener("DOMContentLoaded", function() {
    // Esperar a que el script externo se cargue
    var script = document.createElement("script");
    script.src = "https://cp9.serverse.com/system/streaminfo.js";
    script.onload = function() {
      // Obtener el título actualizado
      var titulo = document.querySelector('h2.cc_streaminfo[data-type="rawmeta"]').innerText;
  
      // Escapar los caracteres especiales en el título, si es necesario
      titulo = encodeURIComponent(titulo);
  
      // Construir las URL de búsqueda en iTunes y Last.fm
      var urliTunes = 'https://itunes.apple.com/search?term=' + titulo + '&limit=1';
      var urlLastFM = 'https://www.last.fm/search?q=' + titulo + '&type=track';
  
      // Realizar una solicitud AJAX utilizando axios para obtener los resultados de búsqueda
      axios.get(urliTunes)
        .then(response => {
          var data = response.data;
          // Extraer la URL de la imagen de la respuesta JSON de iTunes
          var imageUrl = data.results[0].artworkUrl100;
  
          // Actualizar la etiqueta <img> con la URL de la imagen
          var imgTag = document.querySelector('img.cc_streaminfo[data-type="trackimageurl"]');
          imgTag.src = imageUrl;
        })
        .catch(error => {
          console.error('Error al obtener la imagen de iTunes:', error);
        });
  
      // Repetir el proceso para obtener la imagen de Last.fm utilizando la URL correspondiente
      // y actualizar la etiqueta <img> con la URL obtenida
  
      // Ten en cuenta que este es solo un ejemplo básico y puede requerir ajustes adicionales dependiendo del entorno y el flujo de trabajo específico que estés utilizando.
    };
  
    document.head.appendChild(script);
  });
  