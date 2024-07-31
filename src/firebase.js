// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';
import { baseInstance } from '../../api/config';


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
Notification.requestPermission()

const messaging = getMessaging();

export const getFCMToken = async () => {
    try {
        const currentToken = await getToken(messaging, { vapidKey: import.meta.env.VITE_PUBLIC_VAPID_KEY });
        if (currentToken) {
            try {
                const response = await baseInstance.post('/users/updateToken', {
                    fcmToken: currentToken
                });
                console.log('토큰 전달:', response.data);
            } catch (error) {
                console.error(error);
            }
        } else {
            console.log('토큰을 받아오지 못했습니다!');
        }
    } catch (error) {
        console.error(error);
    }
};

