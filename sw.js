const CACHE_NAME = 'whatsapp-direct-app-v1';
// قائمة بجميع الملفات التي يجب تخزينها مؤقتاً للتشغيل دون اتصال
const urlsToCache = [
    '/zool/', // المسار الجذر للتطبيق على GitHub Pages (ضروري جداً)
    '/zool/index.html',
    '/zool/style.css',
    '/zool/manifest.json',
    '/zool/whatsapp-icon.png',
    '/zool/profile-pic.png' // افترضنا هذا الاسم لصورتك
    // مكتبات خارجية مهمة لعمل الأعلام
    'https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/css/flag-icon.min.css',
    'https://ipapi.co/json/' // للحفاظ على وظيفة تحديد الموقع عند محاولة التشغيل
];

// تثبيت Service Worker وتخزين الملفات مؤقتاً
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// جلب الملفات المخزنة مؤقتاً (لتمكين وضع عدم الاتصال)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // العودة بالملف من التخزين المؤقت إذا كان موجوداً
                if (response) {
                    return response;
                }
                // وإلا، اذهب لجلب الملف من الشبكة
                return fetch(event.request);
            })
    );
});

// تحديث Service Worker (تنظيف التخزين المؤقت القديم)
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
