// public/service-worker.js

const CACHE_NAME = 'my-cache';
const urlsToCache = [
  '/',
  '/aboutus',
  // Thêm các URL của các component bạn muốn cache ở đây
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
