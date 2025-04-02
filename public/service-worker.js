// public/service-worker.js

// Evento 'install' - pode ser usado para pré-cachear assets básicos
self.addEventListener('install', (event) => {
  console.log('Service Worker: Instalando...');
  // Exemplo: Força a ativação imediata de um novo SW (se necessário)
  // self.skipWaiting();
});

// Evento 'activate' - limpa caches antigos, etc.
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Ativado.');
  // Exemplo: Garante que o SW controle a página imediatamente
  // event.waitUntil(clients.claim());
});

// Evento 'fetch' - intercepta requisições de rede
// Para um SW *mínimo* apenas para instalação, pode só repassar a requisição
self.addEventListener('fetch', (event) => {
  // console.log('Service Worker: Buscando', event.request.url);
  // Simplesmente busca da rede (sem cache ainda)
  event.respondWith(fetch(event.request));
});