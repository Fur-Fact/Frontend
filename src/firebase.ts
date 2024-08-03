// src/firebase.ts
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getMessaging, getToken, Messaging } from 'firebase/messaging';
import { baseInstance } from './api/config';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID as string,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as string,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID as string,
    appId: import.meta.env.VITE_FIREBASE_APP_ID as string,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID as string
};

// Initialize Firebase
export const app: FirebaseApp = initializeApp(firebaseConfig);
export const messaging: Messaging = getMessaging(app);
const messagingInstance: Messaging = getMessaging();



export const getFCMToken = async (token: string): Promise<void> => {

    try {
        const currentToken = await getToken(messagingInstance, { vapidKey: import.meta.env.VITE_PUBLIC_VAPID_KEY as string });
        if (currentToken) {
            try {
                const response = await baseInstance.post('/users/updateToken', {
                    fcmToken: currentToken
                }, {
                    headers: {
                        'Authorization': `Bearer ${token}`, // Include token if needed for authentication
                    }
                });
                console.log(response);    
            } catch (error) {
                console.error(error);
                alert('토큰 전달 실패');
            }
        } else {
            alert('토큰을 받아오지 못했습니다!');
        }
    } catch (error) {
        console.error(error);
        alert('토큰 받아오기 실패');
    }
};
