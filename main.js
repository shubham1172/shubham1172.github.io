// register service worker
console.log("ASD")
if ('serviceWorker' in navigator) {
    console.log("DOING1")
    window.addEventListener("load", function () {
        console.log("DOING")
        navigator.serviceWorker
            .register('/serviceWorker.js')
            .then(_ => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
    })
}