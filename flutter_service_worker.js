'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "73ce4179ef7d1951f11137b4620e4f83",
"assets/assets/fonts/ConcertOne-Regular.ttf": "1b40f0186d1a8b1500b4676b2e9a7ba1",
"assets/assets/fonts/Raleway-Regular.ttf": "9942588a6c84f959132556d99e83ded6",
"assets/assets/images/ab-img.png": "8d7ae5ac6e934401e57e82f70b996bc1",
"assets/assets/images/facebook.png": "ca84481b0e4b2de70aef09b26b6714b2",
"assets/assets/images/github1.png": "bb15990c0ea25e2b725e7112baf218fd",
"assets/assets/images/image.png": "dc61c02c18b94a762955aeab2d4ecc3c",
"assets/assets/images/twitter.png": "400dc88500c0bc5e11f6c953dedcc7ab",
"assets/FontManifest.json": "557d242da63aaa9d2f79e34c491e3373",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "ea584edd10f9b333f6121e61d34b1f09",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "c4bb6aa768c8cc1f3e9ab66623ea748d",
"/": "c4bb6aa768c8cc1f3e9ab66623ea748d",
"main.dart.js": "1ace69bff185f1370400844889fbfc23",
"manifest.json": "a0c5a30bb262605e0de9d2da640d85ff"
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
