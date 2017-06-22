var CACHE_NAME = 'nap-cache-v1';
var urlsToCache = [
  'https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css',
  '/_next/e0423063-8f1c-4e8f-beae-99d3b8e888a4/page/',
  '/_next/e0423063-8f1c-4e8f-beae-99d3b8e888a4/page/_error/index.js',
  '/_next/59a939419fe07bdb48dac49df93370a5/app.js',
  '/static/cssLoader.js',
  '/static/swLoader.js',
  '/'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      }, function(err) {
        console.log('sw failed to install');
        console.log(err);
      })
  );
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          console.log('found one from cache!');
          return response;
        }
        return fetch(event.request);
      }, function(err) {
        console.log('sw failed to fetch');
        console.log(err);
      }
    )
  );
});
