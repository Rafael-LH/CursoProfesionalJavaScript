// Documentacion de HTML media Element -> https://developer.mozilla.org/es/docs/Web/API/HTMLMediaElement
// Paused https://developer.mozilla.org/es/docs/Web/API/HTMLMediaElement/paused

// clase MediaPlayer
function MediaPlayer(config) {
  this.media = config.el;
  this.plugins = config.plugins || [];
  this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function () {
  const player = {
    play: () => this.media.play(),
    pause: () => this.media.pause(),
    media: this.media,
    // los getters los utilizamos escribiendo el keyword get seguido del nombre de la propiedad
    get muted() {
      return this.media.muted;
    },
    set muted(value) {
      this.media.muted = value;
    },
    // los getter and setter son propiedades virtuales en realidad no existen
  };
  this.plugins.forEach((plugin) => {
    plugin.run(player);
  });
};
// creacion del metodo play (Los metodos que se crean de un clase siempre se agregan a un prototype)
MediaPlayer.prototype.play = function () {
  // si este video esta pausado entonces ponlo en play, si no entonces ponlo en pausa
  this.media.paused ? this.media.play() : this.media.pause();
};
MediaPlayer.prototype.stop = () => this.media.pause();

MediaPlayer.prototype.mute = function () {
  this.media.muted = true;
};
MediaPlayer.prototype.unmute = function () {
  this.media.muted = false;
};
MediaPlayer.prototype.toggleMute = function (e) {
  if (this.media.muted) {
    this.media.muted = false;
    e.target.innerHTML = 'Mute';
  } else {
    this.media.muted = true;
    e.target.innerHTML = 'Unmute';
  }
};
export default MediaPlayer;
