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
