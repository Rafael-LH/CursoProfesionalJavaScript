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


// Service Workers
// Sirven para hacer que nuestras aplicaciones funcionen Offline.

// Muy usados en las Progressive Web Apps (PWA) los ServiceWorkers son una capa que vive entre el navegador y el Internet.

// Parecido a como lo hacen los proxys van a interceptar peticiones para guardar el resultado en cache y la próxima vez que
// se haga la petición tomar del cache ese resultado.

if ('serviceWorker' in navigator) { // comparamos si tenemos serviceWorker en nuestro navegador
  navigator.serviceWorker.register('/sw.js').catch((err) => { //aqui lo que estamos haciendo es guardar un archivo que en sw.js
    // pero este puede fallar y por eso le concatenamos un catch por si falla
    console.log(err.message);
  });
}
