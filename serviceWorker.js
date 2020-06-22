const staticPortfolio = "portfolio-shubham1172-site-v1.01"
const assets = [
    "/style.css",
    "/main.js",
    "/images/profile.png",
    "/images/Gini_preview.png",
    "/images/SRM_preview.png",
    "/images/VQA_preview.png",
    "/images/ADAS_preview.png",
    "/images/peditor_preview.png",
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
