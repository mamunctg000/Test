/* MC CUTEX v15 lightweight app-shell cache. Keep cache names versioned. */
const CACHE_NAME = 'mc-cutex-shell-v15-1-nav-green-logo';
const APP_ROOT = new URL('./', self.registration.scope);
const APP_FILES = [
  new URL('./', self.registration.scope).href,
  new URL('index.html', self.registration.scope).href,
  new URL('manifest.json', self.registration.scope).href,
  new URL('icons/icon-192.png', self.registration.scope).href,
  new URL('icons/icon-512.png', self.registration.scope).href,
  new URL('icons/mc-cutex-logo.png', self.registration.scope).href
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('mc-cutex-shell-') && key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  event.respondWith(fetch(request).then(response => {
    if (response && response.ok && new URL(request.url).pathname.startsWith(new URL('./', self.registration.scope).pathname)) {
      const copy = response.clone(); caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
    }
    return response;
  }).catch(() => caches.match(request).then(cached => cached || (request.mode === 'navigate' ? caches.match(new URL('index.html', self.registration.scope).href) : undefined))));
});
