# Chat App

-Bu proje, Firebase ile Google hesabı kullanarak giriş yapabileceğiniz ve farklı sohbet odalarına katılabileceğiniz bir React tabanlı sohbet uygulamasıdır. Firestore özelliği sayesinde mesajlar anlık olarak kaydedilir ve görüntülenir.

## Özellikler

- Google hesabı ile giriş yapabilme
- Farklı kullanıcılarla farklı sohbet odalarına katılabilme
- Anlık mesajlaşma (Firestore kullanarak)

## Kurulum

1. **Depoyu klonlayın:**

   ```bash
   git clone https://github.com/kullanıcıadı/chat-app.git
   cd chat-app
   ```

2. **Gerekli bağımlılıkları yükleyin:**

   ```bash
   npm install
   ```

3. **Firebase yapılandırma dosyasını oluşturun:**

   - Firebase projenize gidin ve `Project Settings` altında `Config` bilgilerini alın.
   - `src/firebase.js` dosyasını oluşturun ve aşağıdaki bilgileri doldurun:

   ```javascript
   // src/firebase.js
   import { initializeApp } from "firebase/app";
   import { getFirestore } from "firebase/firestore";
   import { getAuth, GoogleAuthProvider } from "firebase/auth";

   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID",
   };

   const app = initializeApp(firebaseConfig);
   const db = getFirestore(app);
   const auth = getAuth(app);
   const provider = new GoogleAuthProvider();

   export { db, auth, provider };
   ```

4. **Uygulamayı başlatın:**

   ```bash
   npm start
   ```

## Kullanım

1. Uygulamanızı tarayıcıda açın: `http://localhost:3000`.
2. Google hesabınızla giriş yapın.
3. Farklı sohbet odalarına katılın ve anlık mesajlaşmanın keyfini çıkarın.

## Katkıda Bulunma

Eğer katkıda bulunmak isterseniz, lütfen bir `issue` açın veya `pull request` gönderin.
