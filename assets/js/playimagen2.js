

const h2Element = document.querySelector('h2.cc_streaminfo');
const imgElement = document.querySelector('img.player__img');
let prevText = null;
const cache = {};

async function updateImage() {
  const text = h2Element.textContent;
  if (text !== prevText) {
    prevText = text;
    const words = text.split(' ').filter(word => word.toLowerCase() !== 'desconocido');

    let foundImage = false;
    for (let i = 0; i < words.length; i++) {
      for (let j = i + 1; j <= words.length; j++) {
        const wordCombination = words.slice(i, j).join('_').toLowerCase();
        const imgPath = `assets/img/locutor/${wordCombination}.JPG`;
        if (await imageExists(imgPath)) {
          imgElement.src = imgPath;
          console.log(`Image found: ${imgPath}`);
          foundImage = true;
          break;
        }
      }
      if (foundImage) break;
    }

    if (!foundImage) {
      for (const word of words) {
        const imgPath = `assets/img/locutor/${word.toLowerCase()}.JPG`;
        if (await imageExists(imgPath)) {
          imgElement.src = imgPath;
          console.log(`Image found: ${imgPath}`);
          foundImage = true;
          break;
        }
      }
    }

    if (!foundImage) {
      console.log('Searching for album image on Last.fm...');
      const apiKey = '21f84fcdb8652dccff838fbbb408d91e';
      const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=album.search&album=${words.join('+')}&api_key=${apiKey}&format=json`);
      const data = await response.json();
      console.log('Last.fm search response:', data);
      const albumImage = data.results.albummatches.album[0].image[3]['#text'];
      if (albumImage) {
        imgElement.src = albumImage;
        console.log(`Album image found: ${albumImage}`);
        foundImage = true;
      }
    }

    if (!foundImage) {
      console.log('Searching for video thumbnail on YouTube...');
      const apiKey = 'AIzaSyCO5F3yenpdk4j1zknsu3rn3NKYzoTvbBA';
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${words.join('+')}&type=video&key=${apiKey}`);
      const data = await response.json();
      const videoThumbnail = data.items[0].snippet.thumbnails.high.url;
      if (videoThumbnail) {
        imgElement.src = videoThumbnail;
        console.log(`Video thumbnail found: ${videoThumbnail}`);
      }
    }
  }
}

setInterval(updateImage, 1000);

async function findLongestMatchingImage(words) {
  let start = 0;
  let end = words.length;
  let result = null;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const wordCombination = words.slice(0, mid).join('_').toLowerCase();
    const imgPath = `assets/img/locutor/${wordCombination}.JPG`;

    if (await imageExists(imgPath)) {
      result = imgPath;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return result;
}

async function imageExists(imageUrl) {
  if (cache[imageUrl] !== undefined) {
    return cache[imageUrl];
  }

  try {
    const response = await fetch(imageUrl, { method: 'HEAD' });
    cache[imageUrl] = response.ok;
    return response.ok;
  } catch (error) {
    cache[imageUrl] = false;
    return false;
  }
}
