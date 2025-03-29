import { precacheAndRoute } from 'workbox-precaching';

precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('install', () => {
  console.log('Service Worker instalado!');
});

self.addEventListener('activate', () => {
  console.log('Service Worker ativado!');
});

self.addEventListener('fetch', (event) => {
  console.log('Interceptando:', event.request.url);
});
