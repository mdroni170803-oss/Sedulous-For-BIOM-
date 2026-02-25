const cacheName = 'sedulous-biom-v1';
const assets = [
  './',
  './index.html',
  './style.css', 
  './app.js'
];

// ফাইলগুলো ক্যাশ করা
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// অফলাইনে ফাইল পরিবেশন করা
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
