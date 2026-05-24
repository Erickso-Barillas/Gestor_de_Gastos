const CACHE_NAME = 'gastos-se-v2'; // Subimos la versión para forzar la actualización
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './favicomatic/favicon-192x192.png',
  './favicomatic/favicon-180x180.png',
  './favicomatic/mstile-310x310.png'
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