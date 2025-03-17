const API_KEY = process.env.EXPO_PUBLIC_FIREBASE_KEY || "";

export const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "weather-expo-challenge.firebaseapp.com",
  projectId: "weather-expo-challenge",
  storageBucket: "weather-expo-challenge.firebasestorage.app",
  messagingSenderId: "649736524698",
  appId: "1:649736524698:web:1e6dd58ee1e3d13cc46023",
};
