const CACHE_NAME = 'gastos-se-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './favicomatic/favicon-196x196.png' // Ruta actualizada
];

// Instalación: Guarda los archivos en caché
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// Estrategia: Cargar desde caché, si no hay, ir a la red
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
