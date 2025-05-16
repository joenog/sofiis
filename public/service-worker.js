// Exemplo básico de service-worker.js (você precisará adaptá-lo)
const CACHE_NAME = "sofiis-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/fav-sofiis.png",
  "/icon-512x512.png",
  // Adicione outros assets estáticos que você quer cachear
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Cache aberto!");
      return cache.addAll(urlsToCache);
    }),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Retorna a resposta do cache se existir, caso contrário, busca da rede.
      return response || fetch(event.request);
    }),
  );
});

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
});
