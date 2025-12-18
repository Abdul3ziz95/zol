
// ... (بقية الكود في الأعلى) ...

// ************** 2. وظيفة التحديد التلقائي الجديدة (باستخدام ipinfo.io) **************

async function setCountryAuto() {
    try {
        // التحويل لاستخدام ipinfo.io (50,000 طلب مجاني شهرياً)
        // هذا الطلب آمن وقانوني ويتم تنفيذه من متصفح المستخدم مباشرة.
        const response = await fetch('https://ipinfo.io/json'); 
        const data = await response.json();
        
        // جلب رمز ISO (مثل SA، SD، US)
        const countryISO = data.country.toLowerCase(); // ipinfo تستخدم 'country' بدلاً من 'country_code'
        
        // البحث عن بيانات الدولة في قائمتنا
        const countryInfo = COUNTRY_DATA.find(c => c.iso.toLowerCase() === countryISO);

        if (countryInfo) {
            // تحديث الواجهة بمعلومات الدولة المكتشفة
            updateFlag(countryInfo.code);
            codeInput.value = `+${countryInfo.code}`;
            // console.log(`تم التحديد التلقائي للبلد: ${countryInfo.name} (${countryInfo.code})`);
        } else {
            // console.warn('تم تحديد موقع IP، لكن رمز الدولة غير موجود في القائمة.');
            updateFlag('249'); // العودة للوضع الافتراضي (السودان)
        }

    } catch (error) {
        // console.error('فشل في تحديد موقع IP التلقائي، تم تعيين الافتراضي (249).', error);
        updateFlag('249'); // العودة للوضع الافتراضي (السودان)
    }
}

// ... (بقية الكود في الأسفل) ...
