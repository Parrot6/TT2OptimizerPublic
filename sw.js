const dynamicCache = "tt2-optimizer-dynamic-v5.26.03";

self.addEventListener('install', function(event){
  //console.log('service worker has been installed')  
  event.waitUntil(
      caches.open(dynamicCache)
    );
  });
  
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then((keyList) => Promise.all(keyList.map((key) => {if(key !== dynamicCache)caches.delete(key)})))
  )
});

self.addEventListener('fetch', (e) => {
  //checkVersion(e);
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request).then(fetchRes => {
        return caches.open(dynamicCache).then(cache => {
          if(fetchRes.status === 200 && !e.request.url.endsWith("save") && !e.request.url.endsWith("load")){
             cache.put(e.request.url, fetchRes.clone());
          } else if(e.request.url.endsWith("save") || e.request.url.endsWith("load") ) {
              console.log("not caching a db call")
          }
          return fetchRes;
        })
      })
      )
      );
});