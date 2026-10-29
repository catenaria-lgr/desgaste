// c54 · Service worker mínimo para que la app se pueda instalar.
// NO guarda nada: cada pedido va a la red como siempre, así nunca se ven datos viejos.
// Sin conexión, la app instalada no abre (igual que en el navegador).
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* sin respondWith: lo atiende la red */ });
