const CACHE_NAME = 'monolito-v2';
const ASSETS = [
  '/assets/img/hero-bg.webp',
  '/assets/css/style.css',
  '/assets/js/main.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});