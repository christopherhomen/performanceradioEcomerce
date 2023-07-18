
const audio = document.getElementById("audio");
const playPause = document.getElementById("play");

class AudioPlayer {
  constructor() {
    this.audio = audio;
    this.playPause = playPause;
    this.pauseBtn = playPause.querySelector(".pause-btn");
    this.playBtn = playPause.querySelector(".play-btn");

    // Esperar a que termine de reproducir el audio de introducción
    this.audio.addEventListener("ended", () => {
      this.audio.src = "https://cp9.serverse.com/proxy/perfor?mp=/stream;";
      this.audio.load();
      this.audio.play();
    });

    // Agregar un controlador de errores para el elemento de audio
    this.audio.addEventListener("error", () => {
      // Manejar el error aquí
    });
  }

  togglePlayPause() {
    this.pauseBtn.classList.toggle("hide");
    this.playBtn.classList.toggle("hide");
  }

  playAudio() {
    if (this.audio.paused || this.audio.ended) {
      this.togglePlayPause();
      this.audio.src = "assets/audio/intromod.mp3";
      this.audio.load();
      this.audio.play();
    } else {
      this.audio.pause();
      this.togglePlayPause();
    }
  }
}

const audioPlayer = new AudioPlayer();

playPause.addEventListener("click", () => {
  audioPlayer.playAudio();
});
