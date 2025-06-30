const CACHE_NAME = 'cowboys-ac-cache-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/dashboard.html',
  '/warranty.html',
  '/installer-checklist.html',
  '/tech-mapout.html',
  '/parts-restock.html',
  '/pricing-catalog.html',
  '/technician-kiosk.html',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
