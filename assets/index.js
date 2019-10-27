import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector('video');
const btnPlayPause = document.querySelector('#btn-playPause');
const btntoggleMute = document.querySelector('#btn-toggleMute');
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
});

// play es un evento que ya biene con tag html de video
btnPlayPause.onclick = () => player.play();
btntoggleMute.onclick = (e) => player.toggleMute(e);
