
const CACHE_NAME = 'whatsapp-direct-app-v1';
// قائمة بجميع الملفات التي يجب تخزينها مؤقتاً للتشغيل دون اتصال
const urlsToCache = [
    './', // المسار الحالي (لحل مشكلة start_url)
    'index.html',
    'style.css',
    'manifest.json',
    'whatsapp-icon.png',
    'profile-pic.png',
    // مكتبات خارجية مهمة لعمل الأعلام
    'https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/css/flag-icon.min.css',
    'https://ipapi.co/json/'
];

// ... (بقية الكود الخاص بـ install, fetch, activate لم يتغير)
