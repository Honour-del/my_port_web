'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "5f891826878c02c1b29cfa4517ab8454",
".git/config": "ac77a8e1e7785dce1cbfbd7eb482fcb5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6f3fb48b74778d40124262dc1ced2c35",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "66e80b479b1b225c53f4cc4e9890848e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "19c5ab2b88e60d5654132b26775f43ab",
".git/logs/refs/heads/main": "02cca8b5976541f7d3ea853814c1aac8",
".git/logs/refs/remotes/origin/main": "1e97798ed0dff4c32147205739960e48",
".git/objects/06/7b612b5c466f8781c31a8565b5151cccf0f69d": "2242995dd3a12a525bf9d5d27d7a0145",
".git/objects/11/8d9d20af0b3e486fb30bffade33cd069536da1": "c67aef784daea1f388d1634b7dc52478",
".git/objects/14/35b41d8443a908881341c7c546950d0c50572f": "01ac1c6a2f60dfee1290a4e58cd2d14f",
".git/objects/14/ecc4c2d1d8c518a6490ed9ced9245f7f072401": "839e8a4acb4e853af5988a9e74d7fe0f",
".git/objects/1a/792453740190d62199e812ab2be2d8d5d842b4": "b05720fd8f9e0698e492336bbb3cabb2",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1e/24be5fc825e365dd4a7b57cfd1b1b1613591b2": "0cca7c640e7f5eac98e640237953d88c",
".git/objects/22/db43513aadad04853713464e6555d93d8d46bb": "fd728bab3be1a1cbc0a235222861321c",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/37/ff626da78bb1b352acf0fb8880c981851ce638": "5330698b6052dea345ff0d2b1d27b758",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/47/818cc125f4b61ab58210edd3c06f8c437f90ba": "ce1161c7701ab241f737dc9b927be76d",
".git/objects/47/d72fde3fc7675fe23c45edd1356d07ce6f9778": "38a1c3838a572645f9df36047ef07b3f",
".git/objects/4a/f149acd8524686ccd587743bc445f7be4bb7cb": "eb648f3aa46ac736c0a2015b8f1533ed",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/52/96045e961bc51aad3115845134299063c35581": "b59b31fd898ed6bbcb90e18981f6c827",
".git/objects/5a/ca33b071975c2f4d85e223c702d689846369c4": "104e08af2cfc70d17e7c4eed546702f8",
".git/objects/60/518d295956d9580c0acb7ee5a903b4bdc21250": "22c1d6d01faf7fc1d8fdea62943b78d8",
".git/objects/63/de0ca6b54aa744e08e67fb650a28090bd37981": "b4d32faf892a7431397f40ede6a1eb6f",
".git/objects/68/5d04b99ee90f69e8bc6cb56639de931247f869": "7f1fcf13a40e38c36c36f97be70e80f3",
".git/objects/71/28e318c71a3c890191035a2e2d3d11a846965f": "e571130db50f4894bffae848cfa43bbf",
".git/objects/71/34b67e1084c43c97cdf474005b689e251928fc": "c03cdd66a5f9455f8f50e24ee14042e1",
".git/objects/73/b9f2c211826ce92f68265ec714c7a0f3f7081a": "7f764581b8bdf12d81952b14d74e1832",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/80/06ed997e3d3d6961ed00560cf9e91b443a5190": "1d09929f10f138b1801cde8d4ab37f43",
".git/objects/83/dcd97840fdea1a753c43da32e8afed05a857e3": "0b818cc5713e71b6c050c1ec3540c032",
".git/objects/85/03d093b553670069510d253de3f3347f4cbd4b": "573f54288b2cb36f707a7fdd5049a108",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/0810dc2ab3668a4c5c6ffb5bbddfe3162c5d7e": "faca4271afaecfdba4179e719ef3ac52",
".git/objects/8e/41ab21c9a83804ac455a70600a053b7155fe06": "1a43e7f2c91acce5dc203a4a7387ae4c",
".git/objects/95/21fc21121d311d74a53751fa6fbb409584caf3": "aa9e33d31dc7af705b5f0344210cc79a",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9c/db87148c63ce09e47778a480d5e2e08a367f48": "045cad9280724958911bd374e7fdb413",
".git/objects/9d/2ad795459f75fc1b596cb086dd33726c6ff56e": "9aa1a5c07869866463f8d0b9ae522f61",
".git/objects/9f/e98a53bbbc062ac7f820193ef8e6fd469b2b3a": "020f58866f8f57ffd7087aac99c78ddd",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/f6e08eb494bf9a20f5f4561694663c2c8d9bcf": "ad7c42718b5583f22f45771251877164",
".git/objects/a6/f668fadeb55831aa7af1ae9201ed508c79382e": "59d6b9b900d906823ce9663789696811",
".git/objects/a7/9fff6addeece8032e31c0d50529b446922186b": "4c08f9b0d509cce3fe567445c76cb973",
".git/objects/ab/6197215a61451cf93ae35e7af85ab241d957d6": "ff16367d663a01635bc7e6794ce4b33f",
".git/objects/ab/71fc8fd1e841cefbcfbf9d009f4fe0e2853a1e": "b6b8b517791072b514857a180bda286b",
".git/objects/b0/22726a8e8c88563f653004d58d41182220e61d": "eeab624d9bf0c6f3e7f9c9950504d8b7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/a51542e4adc4aac7b5f7678a90bb945563daaf": "596767a490c923bcb2fbc879f65ee64d",
".git/objects/c1/6c8d85ea915f4b80b552cf7e80b2d72fbbec71": "ab7098a56e82e701b46b408f066cc129",
".git/objects/c4/dd984f88f7ebc199bb524f8a453f17e278c5d9": "384c234614fc2c5f1ca411c66341716c",
".git/objects/c9/eed4be095e690eaf85dbcce2b32900e33c4b1e": "055c2053759873adbcdb5a4e15f4213f",
".git/objects/cc/3646f4cd5079daefc3d5e767a69abff4381b06": "6ea167a96c3c5eda38d7943e656e64b0",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d0/2c866f7a49385f20c732b7a2e79dab0875a797": "233b980d839d98400d05e02745848a1c",
".git/objects/d4/1638c4c3f313b64a0734e2f48e97ee849c03ef": "a33ee566452ae9a6e9dea8a7efcdf762",
".git/objects/d4/8c25d88dadefe5b1b9adea61f017b938f4cf91": "402503392b0c9fe42bdab4d33f2d7bd2",
".git/objects/d6/824fb6d8cd11dbde452538666d418161da0294": "9a3ed4ae73e4666f234e83ce7b0c8952",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ce90f34fe4021c174331525896b8239f94063e": "82eeb939f8a9d566d189e7e2a87719c5",
".git/objects/d9/9ac5db103d2d3a621385fc62791ee49d39449f": "aab333351dfb3b60730fea87dc4bebf4",
".git/objects/db/b834a4dd5df2abb80d80ade8d2566bef49b90b": "242f4f308b006d7ad518da95679949a2",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/34448a44e229dad9b76cbb35fcee8d2ab5c05e": "587259fa1c3c9cb5b723c43f058c9bb3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/ad41bfbbd768bb870cdbb41493d925ff49fdea": "5e39b2409c029ff707ca3262ecdcb20a",
".git/objects/f2/e68a41e5b80b690494313c6958fcc699650572": "aa13c9ee774df5c6426febcde13e15b5",
".git/objects/f6/8c05937b5511e5991a72ff49446131610f6241": "a774c41fda6faf1e7f375a92e55efaa5",
".git/objects/f8/9fc9f854f31dfa1481d31d1b19c25816da4947": "6e21873c815076cd177381687146928c",
".git/objects/f9/986c255e16a7390c2068421b1328cde031aacf": "ea3b3728d64295934020ed54de87d34c",
".git/objects/ff/abb81e7debedfe5d7def98833908b70c250770": "4301ed09032806a9e0bee926fc064b69",
".git/ORIG_HEAD": "ff5f51bddaf34b551690abc63f8c50a2",
".git/refs/heads/main": "777f0e1cd14e4d4621848ba3617cc3db",
".git/refs/remotes/origin/main": "777f0e1cd14e4d4621848ba3617cc3db",
"assets/AssetManifest.json": "17b3ee779e762e5fdac1469d9ef5fa95",
"assets/assets/fonts/MISTRAL.TTF": "e66e26a6e3c218f7748dd0bd9cb034ff",
"assets/assets/fonts/MuseoSansRounded300.otf": "a6e4413a2e59dbcfadd70ef2c7a65040",
"assets/assets/fonts/MuseoSansRounded500.otf": "229592f6d4f1b72f7e9deaa4c67feae4",
"assets/assets/fonts/MuseoSansRounded700.otf": "cdf94ace8ddbed2986628e0ae0121963",
"assets/assets/fonts/Proximate-Regular.otf": "c91cecc57905668024002a74e11445a7",
"assets/assets/fonts/Ubuntu-Bold.ttf": "e00e2a77dd88a8fe75573a5d993af76a",
"assets/assets/fonts/Ubuntu-Italic.ttf": "4b96047e4af086277cdaeb9e60857534",
"assets/assets/fonts/Ubuntu-Medium.ttf": "8e22c2a6e3a3c679787e763a97fa11f7",
"assets/assets/fonts/Ubuntu-Regular.ttf": "2505bfbd9bde14a7829cc8c242a0d25c",
"assets/assets/images/about.jpg": "0f8b5e39444af09f12224cb65bf82b99",
"assets/assets/images/avatar.jpg": "b13aea78dcd5f0d70908d1ab522e7dc7",
"assets/assets/images/b.jpg": "090a3956c5a0f7269992e41fbf18d975",
"assets/assets/images/b2.jpg": "8fce10af8f8187845170039a5f2d9805",
"assets/assets/images/bg.jpg": "8f384db543d6a8f9cdc3ad9699e7f465",
"assets/assets/images/mobile-development.jpg": "72a1aee539f5d2c1446cfcbac3dc5d99",
"assets/assets/images/portfolio-1.jpg": "7c77862b1a001afc5b3f08f19547e826",
"assets/assets/images/portfolio-5.jpg": "dbb173d40c41eea1f7e6442336ab35a3",
"assets/assets/images/portfolio-6.jpg": "d0d2b65baf60fa927754e1b31b549262",
"assets/assets/images/portfolio-7.jpg": "bb5fedd24fe33890b0114d334aa877b3",
"assets/assets/images/portfolio-8.jpg": "a04a3957516b4c0e83226113badecfe3",
"assets/assets/images/stack_design.png": "30e50d5dd44ab87ff9d93117602d5ec4",
"assets/assets/images/stack_programmer.png": "619622a31cb8e4f8b20a871bed8a0f4a",
"assets/assets/images/web-design.jpg": "a7337a1a1a58f4442bd52f7f6d58cce2",
"assets/assets/images/web-development.jpg": "11d95f4bc4a2a37816cb5c6ebc9dae20",
"assets/FontManifest.json": "20dbb0ab231b73e95f8b796f66fcde5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "61638fbb246fd3a5422ef4d09d7aa6ac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9ce1d6a19b1877075044d14f0673f706",
"/": "9ce1d6a19b1877075044d14f0673f706",
"main.dart.js": "62b99a7f564553bcd046a9a377cfb139",
"manifest.json": "2a27fb33f6d0532222215a292b9138b5",
"README.md": "7b5ad6457c67bb209de710e2798fbac9",
"version.json": "a278e46a1de5ba4354fffb22e9652252"
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
