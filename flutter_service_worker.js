'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "f423b582c21b8a1f3b751402d1163795",
"assets/assets/bottom-navigation-icons/iconly-light-outline-activity.svg": "78faaa385ac9d14f224d49a3850aa3c1",
"assets/assets/bottom-navigation-icons/iconly-light-outline-calendar.svg": "e02d9ea75881d3cbc8e3ff3e0aa1113a",
"assets/assets/bottom-navigation-icons/iconly-light-outline-category.svg": "b39e47bf632612796baed32eb5ab32d6",
"assets/assets/bottom-navigation-icons/iconly-light-outline-profile.svg": "7dfd459d75e1f4bbdc89b45187582ca3",
"assets/assets/iconly-light-arrow-left-square.svg": "0810137c12dc4a9af63a842cf27e7480",
"assets/assets/icons/alarm-fill.svg": "29ecd737b56fe6f53c659c31de0896e1",
"assets/assets/icons/alarm.svg": "cfe657230291131c7a83daf615bc2353",
"assets/assets/icons/group-users.svg": "370b2e410fe00846ede44a9a5045d177",
"assets/assets/icons/heart-white.svg": "fbce9a8dab1806a5c07c50921b98f46a",
"assets/assets/icons/heart.svg": "350235d7206bc919498d1fd874b11eff",
"assets/assets/icons/iconly-bulk-discount.svg": "27fce4a4deedc70dd0e5580cde1885da",
"assets/assets/icons/iconly-light-calendar.svg": "61044c1a8f124718778d4ba087cf47ac",
"assets/assets/icons/iconly-light-close-square.svg": "1f08e87ec7cdea7102aff291bafbc974",
"assets/assets/icons/iconly-light-location.svg": "467e1585c9956e1b17250fe019ca8f33",
"assets/assets/icons/iconly-light-outline-arrow-left-circle.svg": "9394a0d5c45c0bfcb0402a1622ebea61",
"assets/assets/icons/iconly-light-outline-bag-fill.svg": "31253f201d362e393bedec8345d9e26e",
"assets/assets/icons/iconly-light-outline-bag2.svg": "9070304903bf9f472fc63d67bb0325e9",
"assets/assets/icons/iconly-light-outline-camera.svg": "d03931762499a314d0bc2f604d1575c4",
"assets/assets/icons/iconly-light-outline-close-square.svg": "621a729af9bc03868058bc22b54558a8",
"assets/assets/icons/iconly-light-outline-delete.svg": "fc01f5067463d6cea8ebe2f292afc7d6",
"assets/assets/icons/iconly-light-outline-folder.svg": "c2678f59cf8c117795e9fa7b71335400",
"assets/assets/icons/iconly-light-outline-heart.svg": "6c44feb9bc29030e492aad7ea01b60c9",
"assets/assets/icons/iconly-light-outline-profile.svg": "90d9ec43d072822ece34032d42971f7b",
"assets/assets/icons/iconly-light-outline-search.svg": "29cdf233c2337eb936e88fb8756995d5",
"assets/assets/icons/iconly-light-outline-voice.svg": "362695eb2c75c49d25205bb76273a959",
"assets/assets/icons/iconly-light-outline-wallet-fill.svg": "f4efdd77bd5abdd2ac492725ce31d743",
"assets/assets/icons/iconly-light-outline-wallet.svg": "9cc6286a1466310adf6fa0b2cb15d49b",
"assets/assets/icons/icons8-instagram.svg": "b4a797d1e56ec910e7db63ba2b572fde",
"assets/assets/icons/input-mobile.svg": "5d87caee41f5795ac511c0e8eed55a08",
"assets/assets/icons/small-calendar.svg": "4cd72e443d52cb3475f99385f721a6cf",
"assets/assets/icons/tick.svg": "d0843192c72337a9f72d7cfd35d6401a",
"assets/assets/images/artboard%25202jwaan%2520character2.svg": "d195010f96ee11790efc389bd4d19b5f",
"assets/assets/images/empty-user.png": "2d8b82d4f508b19177e3f530d7901ed2",
"assets/assets/images/logo.png": "6ea609e2074d298ff919f81362e98631",
"assets/assets/images/Samsung%2520Galaxy%2520Tab10%2520%25E2%2580%2593%25201.png": "b7d994688fc93e00b1695c3374b553fe",
"assets/assets/images/Samsung%2520Galaxy%2520Tab10%2520%25E2%2580%2593%25202.png": "a7614e9def3478f9dfec4cca3894b48c",
"assets/assets/images/Samsung%2520Galaxy%2520Tab10%2520%25E2%2580%2593%25203.png": "8854b651366e086d9e780da38bd6baa7",
"assets/assets/loading.gif": "5572838d351b66bf6a3350b6d8d23cb8",
"assets/assets/lottie/loading.gif": "b6d636b1d2c21bf663b0f15d515e982c",
"assets/assets/preload.png": "6c816d5bb2b4a1ccd6e4edbf755c43a6",
"assets/assets/test/layer1.svg": "089badc5737ddb8366ecc48811b4b193",
"assets/assets/test/salon-banner.png": "a26569ed91e4479cea1a285e871e7ebc",
"assets/assets/test/salon-logo.png": "e8a04a856560fc72c58815bef1438192",
"assets/assets/test/stylist-banner.png": "4211c6333bf3f90768a332547f1e8404",
"assets/FontManifest.json": "148d3c2c795fcb777300b12a8bc6cd9f",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/PeydaFaNum-Regular.ttf": "eac59490db19dba654d4465cdb12acf9",
"assets/NOTICES": "44eb21dfc6e92b4b4d9b2420f57a0f41",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/map_launcher/assets/icons/amap.svg": "00409535b144c70322cd4600de82657c",
"assets/packages/map_launcher/assets/icons/apple.svg": "6fe49a5ae50a4c603897f6f54dec16a8",
"assets/packages/map_launcher/assets/icons/baidu.svg": "22335d62432f9d5aac833bcccfa5cfe8",
"assets/packages/map_launcher/assets/icons/citymapper.svg": "58c49ff6df286e325c21a28ebf783ebe",
"assets/packages/map_launcher/assets/icons/doubleGis.svg": "ab8f52395c01fcd87ed3e2ed9660966e",
"assets/packages/map_launcher/assets/icons/google.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/googleGo.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/here.svg": "aea2492cde15953de7bb2ab1487fd4c7",
"assets/packages/map_launcher/assets/icons/mapswithme.svg": "87df7956e58cae949e88a0c744ca49e8",
"assets/packages/map_launcher/assets/icons/osmand.svg": "639b2304776a6794ec682a926dbcbc4c",
"assets/packages/map_launcher/assets/icons/osmandplus.svg": "31c36b1f20dc45a88c283e928583736f",
"assets/packages/map_launcher/assets/icons/petal.svg": "76c9cfa1bfefb298416cfef6a13a70c5",
"assets/packages/map_launcher/assets/icons/tencent.svg": "4e1babec6bbab0159bdc204932193a89",
"assets/packages/map_launcher/assets/icons/tomtomgo.svg": "493b0844a3218a19b1c80c92c060bba7",
"assets/packages/map_launcher/assets/icons/waze.svg": "311a17de2a40c8fa1dd9022d4e12982c",
"assets/packages/map_launcher/assets/icons/yandexMaps.svg": "3dfd1d365352408e86c9c57fef238eed",
"assets/packages/map_launcher/assets/icons/yandexNavi.svg": "bad6bf6aebd1e0d711f3c7ed9497e9a3",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "77ae270fb9ac38b21e3f1a60651e308d",
"/": "77ae270fb9ac38b21e3f1a60651e308d",
"main.dart.js": "496add45b0741ad5eab4593ae2867fba",
"manifest.json": "6a197e2ea1fba812413070b12acfc8b8",
"version.json": "4b3bbd54e6ac1bf04bae17034c90345c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
