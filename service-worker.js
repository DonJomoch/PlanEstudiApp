const CACHE_NAME = "plan-estudio-cache-v1";
const urlsToCache = ["index.html", "manifest.json", "icon.png"];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
  }
