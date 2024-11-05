import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAOH6rtr6_foxYLjLDrPQqD9jNissbB9SA",
    authDomain: "ai-travel-planner-rn.firebaseapp.com",
    projectId: "ai-travel-planner-rn",
    storageBucket: "ai-travel-planner-rn.firebasestorage.app",
    messagingSenderId: "352779008174",
    appId: "1:352779008174:web:40be1c9c8504ea7a1d953f",
    measurementId: "G-7RLXX0H11M"
};

// Initialize Firebase app (ensure it's done only once)
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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

export { app, auth, db };


