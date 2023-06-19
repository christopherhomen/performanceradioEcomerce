<<<<<<< HEAD
// Crear un observador de mutación
var observer = new MutationObserver(function (mutationsList) {
    // Recorrer las mutaciones detectadas
    for (var mutation of mutationsList) {
      // Verificar si el elemento h2 ha sido modificado
      if (mutation.target.classList.contains('cc_streaminfo') && mutation.target.getAttribute('data-type') === 'song') {
        // Obtener el texto del elemento h2
        var textoH2 = mutation.target.textContent.trim();
  
        // Definir la frase a buscar
        var fraseBusqueda = "muralla";
  
        // Verificar si el texto contiene la frase
        if (textoH2.includes(fraseBusqueda)) {
          // Obtener el elemento img por su clase y el atributo data-type
          var imgElement = document.querySelector('.cc_streaminfo.player__img[data-type="trackimageurl"]');
  
          // Cambiar la imagen por la que desees
          imgElement.src = "../img/locutor/chris_homen.jpg"; // Reemplaza "URL_DE_LA_IMAGEN" con la URL de la imagen que deseas utilizar
  
          // Detener el observador de mutación una vez que se haya realizado el cambio
          observer.disconnect();
        }
      }
    }
  });
  
  // Seleccionar el elemento h2
  var h2Element = document.querySelector('.cc_streaminfo[data-type="song"]');
  
  // Configurar las opciones del observador de mutación
  var observerOptions = { childList: true, subtree: true };
  
  // Iniciar el observador de mutación en el elemento h2
  observer.observe(h2Element, observerOptions);
  
=======
// Obtener el elemento h2 por su clase y el atributo data-type
var h2Element = document.querySelector('.cc_streaminfo[data-type="song"]');

// Obtener el texto del elemento h2
var textoH2 = h2Element.textContent.trim();

// Definir la frase a buscar
var fraseBusqueda = "a";

// Verificar si el texto contiene la frase
if (textoH2.includes(fraseBusqueda)) {
  // Obtener el elemento img por su clase y el atributo data-type
  var imgElement = document.querySelector('.cc_streaminfo.player__img[data-type="trackimageurl"]');

  // Cambiar la imagen por la que desees
  imgElement.src = "../img/locutor/chris_homen.jpg"; // Reemplaza "URL_DE_LA_IMAGEN" con la URL de la imagen que deseas utilizar
}
>>>>>>> 1173f7cafe19cd3f4f5853a32e7b6c80dd01cfb5
