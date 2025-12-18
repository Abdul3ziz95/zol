const CACHE_NAME = 'whatsapp-messenger-v20251227'; //  *** رقم الإصدار الجديد ***
const urlsToCache = [
    '/zol/', // ✅ تم التحديث
    '/zol/index.html?v=20251227', // ✅ تم التحديث
    '/zol/style.css?v=20251227', // ✅ تم التحديث
    '/zol/script.js?v=20251227', // ✅ تم التحديث
    '/zol/manifest.json?v=20251227', // ✅ تم التحديث
    'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/css/flag-icon.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
    'https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;800&display=swap',
    'whatsapp-icon.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
        )
    );
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
