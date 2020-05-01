'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "fa59cb0ddff351c136afd518630f7bde",
"assets/assets/images/ab-img.png": "8d7ae5ac6e934401e57e82f70b996bc1",
"assets/assets/images/facebook.png": "ca84481b0e4b2de70aef09b26b6714b2",
"assets/assets/images/github1.png": "bb15990c0ea25e2b725e7112baf218fd",
"assets/assets/images/image.png": "f6cc6fc4a3c02b860265a804f845e925",
"assets/assets/images/main-img.jpg": "93d3e31639a4d07613de9dccdc8bd5e8",
"assets/assets/images/twitter.png": "400dc88500c0bc5e11f6c953dedcc7ab",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "05a4549c83654132e36fe65b3ce0d2c6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "78103319d75cfc3b9f4b69433c71a616",
"/": "78103319d75cfc3b9f4b69433c71a616",
"main.dart.js": "a76b1edc1de1e6d67fc0c2a024dfc282",
"manifest.json": "99a0e166c3c28b6d2d3b21266c9a58a8"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
