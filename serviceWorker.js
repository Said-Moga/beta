const staticDevDino = "UPMH"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/img/cactus1.jpg",
  "/img/cactus2.jpg",
  "/img/dino_tru.jpg",
  "/iimg/dino.jpg",
  "/img/nube.jpg",
  "/img/suelo_tru.jpg",

]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevDino).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })