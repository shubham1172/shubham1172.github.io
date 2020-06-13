const staticPortfolio = "portfolio-shubham1172-site-v1"
const assets = [
    "/",
    "/index.html",
    "/style.css",
    "/main.js",
    "/images/profile.jpg"
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticPortfolio).then(cache => {
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