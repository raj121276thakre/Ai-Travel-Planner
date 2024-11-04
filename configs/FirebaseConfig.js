import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyDekyT9uPD3F6YotTjrgztLLC0Io2qPoQI",
    authDomain: "ai-travel-planner-c5b18.firebaseapp.com",
    projectId: "ai-travel-planner-c5b18",
    storageBucket: "ai-travel-planner-c5b18.firebasestorage.app",
    messagingSenderId: "774819496327",
    appId: "1:774819496327:web:c3ef8981a28a81b51a5322",
    measurementId: "G-EXG7Y2QVRD"
};

// Initialize Firebase app (ensure it's done only once)
const app = initializeApp(firebaseConfig);

// Check if Auth is already initialized; if not, initialize it
let auth;
try {
    auth = getAuth(app);
} catch (e) {
    if (e.code === 'auth/already-initialized') {
        auth = getAuth();
    } else {
        auth = initializeAuth(app, {
            persistence: getReactNativePersistence(AsyncStorage)
        });
    }
}

export { app, auth };

