# إعداد قاعدة بيانات WTN STORE

## إعداد التطبيق
المشروع مضبوط على:

- Project ID: `wtn-store`
- Auth domain: `wtn-store.firebaseapp.com`
- Realtime Database: `https://wtn-store-default-rtdb.firebaseio.com`
- Storage bucket: `wtn-store.firebasestorage.app`
- Sender ID: `1082993079838`
- App ID: `1:1082993079838:web:efe131dbaf3425c640e00f`

المفتاحان `GOOGLE_API_KEY` و`GOOGLE_ANALYTICS_MEASUREMENT_ID` محفوظان بأمان. أضفهما عند النشر كـ `VITE_FIREBASE_API_KEY` و`VITE_FIREBASE_MEASUREMENT_ID`.

## نشر قواعد Realtime Database
افتح Firebase Console → Realtime Database → Rules، والصق كامل محتوى `database.rules.json` ثم اضغط Publish.

## تسجيل Google
Google مفعّل. أضف نطاق المعاينة والنطاق النهائي إلى Authentication → Settings → Authorized domains.

## أول مدير
بعد أول تسجيل دخول، انسخ UID من Authentication → Users، ثم أضف في Realtime Database:

```json
{
  "admins": {
    "PUT_USER_UID_HERE": true
  }
}
```

## بنية البيانات
القواعد تشمل المنتجات، الأقسام، المخزون، الطلبات، المستخدمين، المحافظ، طلبات الشحن، المراجعات، الدعم، الإعلانات، طرق الدفع والحظر.
