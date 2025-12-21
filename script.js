/* تم حذف جزء كبير من الكود هنا لتسهيل رؤية الجزء الذي يجب عليك نسخه ولصقه بالكامل. */
/* ابدأ النسخ من بداية الملف، حتى دالة setupPWA */

const APP_LINK = 'https://abdul3ziz95.github.io/zol/';
const SHARE_MESSAGE = 'جربوا مراسل الواتساب الفوري! أسرع طريقة لبدء محادثة دون حفظ الرقم. الرابط: ' + APP_LINK;
const CURRENT_VERSION = '20251227'; // الإصدار المحدث

const COUNTRY_DATA = [
    { name: 'السودان', code: '249', iso: 'sd' }, { name: 'المملكة العربية السعودية', code: '966', iso: 'sa' },
    // ... بقية البيانات والوظائف الأخرى في الملف ...

// ************** 4. التهيئة (Initialization) **************

function initializeApp() {
    function setVhProperty() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        document.getElementById('pageWrapper').style.transform = 'translateZ(0)';
    }
    setVhProperty();
    window.addEventListener('resize', setVhProperty);
    
    populateDatalist();
    
    // تنفيذ التحديد التلقائي
    setCountryAuto();

    setupPWA();
}

/**
 * تهيئة Service Worker لدعم PWA/TWA.
 * تم التعديل لاستخدام مسار ونطاق نسبي (Relative Path and Scope) 
 * لحل مشكلة التعرف عليه على خوادم GitHub Pages الفرعية.
 */
function setupPWA() {
    if ('serviceWorker' in navigator) {
        // تسجيل الـ Service Worker باستخدام المسار النسبي (./)
         navigator.serviceWorker.register(`sw.js?v=${CURRENT_VERSION}`, { scope: './' }) 
            .catch(() => {});
    }
    
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e; 
        installButton.style.display = 'block'; 
    });

    installButton.addEventListener('click', () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    installButton.style.display = 'none'; 
                }
                deferredPrompt = null; 
            });
        }
    });
}

window.addEventListener('load', initializeApp);

