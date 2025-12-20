
const APP_LINK = 'https://abdul3ziz95.github.io/zol/';
const SHARE_MESSAGE = 'جربوا مراسل الواتساب الفوري! أسرع طريقة لبدء محادثة دون حفظ الرقم. الرابط: ' + APP_LINK;
const CURRENT_VERSION = '20251227'; // الإصدار المحدث

const COUNTRY_DATA = [
    { name: 'السودان', code: '249', iso: 'sd' }, { name: 'المملكة العربية السعودية', code: '966', iso: 'sa' },
    { name: 'الإمارات العربية المتحدة', code: '971', iso: 'ae' }, { name: 'مصر', code: '20', iso: 'eg' },
    { name: 'الولايات المتحدة الأمريكية', code: '1', iso: 'us' }, { name: 'المملكة المتحدة', code: '44', iso: 'gb' },
    { name: 'الجزائر', code: '213', iso: 'dz' }, { name: 'الأردن', code: '962', iso: 'jo' },
    { name: 'الكويت', code: '965', iso: 'kw' }, { name: 'قطر', code: '974', iso: 'qa' },
    { name: 'عُمان', code: '968', iso: 'om' }, { name: 'اليمن', code: '967', iso: 'ye' },
    { name: 'ليبيا', code: '218', iso: 'ly' }, { name: 'المغرب', code: '212', iso: 'ma' },
    { name: 'فلسطين', code: '970', iso: 'ps' }, { name: 'العراق', code: '964', iso: 'iq' },
    { name: 'سوريا', code: '963', iso: 'sy' }, { name: 'لبنان', code: '961', iso: 'lb' },
    { name: 'تونس', code: '216', iso: 'tn' }, { name: 'أفغانستان', code: '93', iso: 'af' },
    { name: 'ألبانيا', code: '355', iso: 'al' }, { name: 'أندورا', code: '376', iso: 'ad' },
    { name: 'أنغولا', code: '244', iso: 'ao' }, { name: 'الأرجنتين', code: '54', iso: 'ar' },
    { name: 'أرمينيا', code: '374', iso: 'am' }, { name: 'أستراليا', code: '61', iso: 'au' },
    { name: 'النمسا', code: '43', iso: 'at' }, { name: 'أذربيجان', code: '994', iso: 'az' },
    { name: 'البحرين', code: '973', iso: 'bh' }, { name: 'بنغلاديش', code: '880', iso: 'bd' },
    { name: 'بلجيكا', code: '32', iso: 'be' }, { name: 'البرازيل', code: '55', iso: 'br' },
    { name: 'بلغاريا', code: '359', iso: 'bg' }, { name: 'كندا', code: '1', iso: 'ca' },
    { name: 'تشيلي', code: '56', iso: 'cl' }, { name: 'الصين', code: '86', iso: 'cn' },
    { name: 'كولومبيا', code: '57', iso: 'co' }, { name: 'كرواتيا', code: '385', iso: 'hr' },
    { name: 'كوبا', code: '53', iso: 'cu' }, { name: 'قبرص', code: '357', iso: 'cy' },
    { name: 'الدنمارك', code: '45', iso: 'dk' }, { name: 'الإكوادور', code: '593', iso: 'ec' },
    { name: 'إثيوبيا', code: '251', iso: 'et' }, { name: 'فنلندا', code: '358', iso: 'fi' },
    { name: 'فرنسا', code: '33', iso: 'fr' }, { name: 'ألمانيا', code: '49', iso: 'de' },
    { name: 'اليونان', code: '30', iso: 'gr' }, { name: 'الهند', code: '91', iso: 'in' },
    { name: 'إندونيسيا', code: '62', iso: 'id' }, { name: 'أيرلندا', code: '353', iso: 'ie' },
    { name: 'إسرائيل', code: '972', iso: 'il' }, { name: 'إيطاليا', code: '39', iso: 'it' },
    { name: 'اليابان', code: '81', iso: 'jp' }, { name: 'كينيا', code: '254', iso: 'ke' },
    { name: 'كوريا الجنوبية', code: '82', iso: 'kr' }, { name: 'المكسيك', code: '52', iso: 'mx' },
    { name: 'نيجيريا', code: '234', iso: 'ng' }, { name: 'النرويج', code: '47', iso: 'no' },
    { name: 'باكستان', code: '92', iso: 'pk' }, { name: 'بيرو', code: '51', iso: 'pe' },
    { name: 'الفلبين', code: '63', iso: 'ph' }, { name: 'بولندا', code: '48', iso: 'pl' },
    { name: 'البرتغال', code: '351', iso: 'pt' }, { name: 'روسيا', code: '7', iso: 'ru' },
    { name: 'سنغافورة', code: '65', iso: 'sg' }, { name: 'الصومال', code: '252', iso: 'so' },
    { name: 'جنوب أفريقيا', code: '27', iso: 'za' }, { name: 'إسبانيا', code: '34', iso: 'es' },
    { name: 'السويد', code: '46', iso: 'se' }, { name: 'سويسرا', code: '41', iso: 'ch' },
    { name: 'تركيا', code: '90', iso: 'tr' }, { name: 'أوكرانيا', code: '380', iso: 'ua' },
    { name: 'فنزويلا', code: '58', iso: 've' }, { name: 'زيمبابوي', code: '263', iso: 'zw' }
];

const codeMap = {};
const isoMap = {}; 
COUNTRY_DATA.forEach(country => {
    codeMap[country.code] = country;
    isoMap[country.iso] = country;
});


const codeInput = document.getElementById('codeInput'); 
const phoneInput = document.getElementById('phoneInput'); 
const countryInput = document.getElementById('countryInput');
const countryOptionsList = document.getElementById('country-options');
const currentFlagSpan = document.getElementById('currentFlag');
const installButton = document.getElementById('installButton');

let savedCountryValue = 'السودان (+249)';
let deferredPrompt; 

// ************** 1. وظائف التحكم في الدولة **************

function populateDatalist() {
    countryOptionsList.innerHTML = '';
    COUNTRY_DATA.forEach(country => {
        const option = document.createElement('option');
        option.value = `${country.name} (+${country.code})`;
        countryOptionsList.appendChild(option);
    });
}

function updateCodeFromCountry(selectedValue) {
    const match = selectedValue.match(/\((\+)(\d+)\)/);
    const code = match ? match[2] : '';
    
    if (code) {
        codeInput.value = `+${code}`;
        updateFlag(code);
        savedCountryValue = selectedValue;
    } else {
        updateFlag(codeInput.value.replace('+', '').trim());
    }
}

function updateCountryFromCode(inputValue) {
    let code = inputValue.replace('+', '').trim(); 
    
    if (!inputValue.startsWith('+') && code) {
         codeInput.value = `+${code}`;
    } else if (!code) {
        codeInput.value = '+'; 
    }

    updateFlag(code);
}

function updateFlag(code) {
    const countryInfo = codeMap[code];

    if (countryInfo) {
        currentFlagSpan.className = `flag-icon flag-icon-${countryInfo.iso.toLowerCase()}`;
        countryInput.value = `${countryInfo.name} (+${code})`;
        savedCountryValue = countryInput.value;
    } else {
        currentFlagSpan.className = `flag-icon flag-icon-un`;
    }
}

function restoreCountryValue() {
    if (!countryInput.value || !countryInput.value.includes('(')) {
        countryInput.value = savedCountryValue;
    }
}

// ************** 2. وظيفة التحديد التلقائي (المحدثة) **************

async function setCountryAuto() {
    try {
        // نستخدم ipinfo.io (حل أكثر استقراراً لـ Rate Limits)
        const response = await fetch('https://ipinfo.io/json'); 
        const data = await response.json();
        
        // ipinfo تستخدم 'country' لرمز ISO
        const countryISO = data.country.toLowerCase(); 
        
        const countryInfo = COUNTRY_DATA.find(c => c.iso.toLowerCase() === countryISO);

        if (countryInfo) {
            updateFlag(countryInfo.code);
            codeInput.value = `+${countryInfo.code}`;
        } else {
            updateFlag('249'); // العودة للوضع الافتراضي
        }

    } catch (error) {
        updateFlag('249'); // العودة للوضع الافتراضي في حال فشل الطلب
    }
}


// ************** 3. وظائف التطبيق الرئيسية **************

function openWhatsApp() {
    const code = codeInput.value.replace('+', '').trim(); 
    const localNumber = phoneInput.value.trim().replace(/[\s+-]/g, '');
    const autoMessage = "السلام عليكم"; 

    if (!code || !localNumber || localNumber.length < 6) {
        alert('الرجاء إدخال رقم هاتف محلي صالح (لا يقل عن 6 أرقام) ورمز الدولة.');
        return;
    }

    const fullNumber = code + localNumber;
    let whatsappLink = 'https://wa.me/' + fullNumber;

    if (autoMessage) {
        whatsappLink += `?text=${encodeURIComponent(autoMessage)}`;
    }
    
    window.open(whatsappLink, '_blank');
}

function shareApp(platform) {
    let url = '';
    const finalLink = APP_LINK + '?source=share'; 
    const finalMessage = SHARE_MESSAGE.replace(APP_LINK, finalLink);
    switch (platform) {
        case 'whatsapp':
            url = `https://wa.me/?text=${encodeURIComponent(finalMessage)}`;
            break;
        case 'messenger':
            url = `https://www.facebook.com/dialog/send?link=${encodeURIComponent(finalLink)}&app_id=1234567890&redirect_uri=${encodeURIComponent(finalLink)}`;
            break;
        case 'facebook':
            url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(finalLink)}`;
            break;
        default:
            return;
    }
    window.open(url, '_blank', 'width=600,height=400');
}


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
 * تم تعديل النطاق (scope) ومسار التسجيل ليصبحا نسبيين ('/')
 * ليتناسبا مع بيئة التشغيل كـ Trusted Web Activity.
 */
function setupPWA() {
    if ('serviceWorker' in navigator) {
        // تسجيل الـ Service Worker باستخدام المسار النسبي (Root Scope)
         navigator.serviceWorker.register(`/sw.js?v=${CURRENT_VERSION}`, { scope: '/' }) 
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
