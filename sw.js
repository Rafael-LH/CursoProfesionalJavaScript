const version = 'v1';
self.addEventListener('install', (e) => { // esto se llamara cuando el navegador instale el service worker
// self es como el this de los service worker
  e.waitUntil(precache());
});
self.addEventListener('fetch', (e) => { // esto se llamara cuando el navegador instale el service worker
// self es como el this de los service worker
  const { request } = e;

  // get
  if (request.method !== 'GET') {
    return;
  }
  // buscar en cache
  e.respondWith(cachedResponse(request));

  // actualizar el cache
  e.waitUntil(updatingCache(request));
});
async function precache() {
  const cache = await caches.open(version);
  return cache.addAll([
    //   ingresamos todos los recursos
    '/',
    '/index.html',
    '/assets/index.js',
    '/assets/MediaPlayer.js',
    '/assets/plugins/AutoPause.js',
    '/assets/plugins/AutoPlay.js',
    '/assets/index.css',
    '/assets/f8.mp4',
  ]);
}
async function cachedResponse(request) {
  const cache = await caches.open(version);
  const response = await cache.match(request);
  return response || fetch(request);
}
async function updatingCache(request) {
  const cache = await caches.open(version);
  const response = await fetch(request);
  return cache.put(request, response);
}
