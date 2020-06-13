window.addEventListener("load", function () {
    // register service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('/serviceWorker.js')
            .then(_ => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
    }

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'UA-169326937-1');
})
