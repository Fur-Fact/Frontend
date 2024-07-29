import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
  // apiKey: ,
  // authDomain: ,
  // projectId: ,
  // storageBucket: 
  // messagingSenderId: ,
  // appId: ,
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging, getToken, onMessage };
