
document.addEventListener('DOMContentLoaded', function() {

  // const h2Element = document.querySelector('h2.cc_streaminfo');

  // setInterval(() => {
  //     const text = h2Element.textContent;
  //     console.log(text);
  //     let palabrasTitulo = text.toLowerCase().split(' ');
  // console.log("Hola " + palabrasTitulo);

  
  // }, 1000);

  // const h2Element = document.querySelector('h2.cc_streaminfo');
  // const imgElement = document.querySelector('img.player__img');
  // let prevText = null;
  
  // setInterval(() => {
  //     const text = h2Element.textContent;
  //     console.log("Hola " + text);
  //     if (text !== prevText) {
  //         prevText = text;
  //         const words = text.split(' ');
  
  //         for (const word of words) {
  //             const imgPath = `assets/img/locutor/${word}.jpg`;
  //             if (imageExists(imgPath)) {
  //                 imgElement.src = imgPath;
  //                 break;
  //             }
  //         }
  //     }
  // }, 1000);
  
  // function imageExists(imageUrl) {
  //     const http = new XMLHttpRequest();
  //     http.open('HEAD', imageUrl, false);
  //     http.send();
  //     return http.status !== 404;
  // }
  /*este si funciona*/
  // const h2Element = document.querySelector('h2.cc_streaminfo');
  // const imgElement = document.querySelector('img.player__img');
  // let prevText = null;
  
  // setInterval(async () => {
  //     const text = h2Element.textContent;
  //     if (text !== prevText) {
  //         prevText = text;
  //         const words = text.split(' ').filter(word => word.toLowerCase() !== 'desconocido');
  
  //         let foundImage = false;
  //         for (const word of words) {
  //             const imgPath = `assets/img/locutor/${word}.jpg`;
  //             if (imageExists(imgPath)) {
  //                 imgElement.src = imgPath;
  //                 foundImage = true;
  //                 break;
  //             }
  //         }
  
  //         if (!foundImage) {
  //             console.log(`Searching iTunes for: ${words.join('+')}`);
  //             const response = await fetch(`https://itunes.apple.com/search?term=${words.join('+')}&entity=album`);
  //             const data = await response.json();
  //             console.log(`iTunes search results:`, data);
  //             const albumImage = data.results[0].artworkUrl100;
  //             if (albumImage) {
  //                 console.log(`Found album image: ${albumImage}`);
  //                 imgElement.src = albumImage;
  //             } else {
  //                 console.log(`No album image found`);
  //             }
  //         }
  //     }
  // }, 1000);
  
  // function imageExists(imageUrl) {
  //     const http = new XMLHttpRequest();
  //     http.open('HEAD', imageUrl, false);
  //     http.send();
  //     return http.status !== 404;
  // }
  
  const h2Element = document.querySelector('h2.cc_streaminfo');
  const imgElement = document.querySelector('img.player__img');
  let prevText = null;
  
  setInterval(async () => {
      const text = h2Element.textContent;
      if (text !== prevText) {
          prevText = text;
          const words = text.split(' ').filter(word => word.toLowerCase() !== 'desconocido');
  
          let foundImage = false;
          for (const word of words) {
              const imgPath = `assets/img/locutor/${word}.jpg`;
              if (imageExists(imgPath)) {
                  imgElement.src = imgPath;
                  foundImage = true;
                  break;
              }
          }
  
          if (!foundImage) {
              for (let i = 0; i < words.length; i++) {
                  for (let j = i + 1; j <= words.length; j++) {
                      const wordCombination = words.slice(i, j).join('_');
                      const imgPath = `assets/img/locutor/${wordCombination}.jpg`;
                      if (imageExists(imgPath)) {
                          imgElement.src = imgPath;
                          foundImage = true;
                          break;
                      }
                  }
                  if (foundImage) break;
              }
          }
  
          if (!foundImage) {
              const response = await fetch(`https://itunes.apple.com/search?term=${words.join('+')}&entity=album`);
              const data = await response.json();
              const albumImage = data.results[0].artworkUrl100;
              if (albumImage) {
                  imgElement.src = albumImage;
              }
          }
      }
  }, 1000);
  
  function imageExists(imageUrl) {
      const http = new XMLHttpRequest();
      http.open('HEAD', imageUrl, false);
      http.send();
      return http.status !== 404;
  }
  
  
});
