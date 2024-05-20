// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "admin-auth-f1ceb.firebaseapp.com",
  projectId: "admin-auth-f1ceb",
  storageBucket: "admin-auth-f1ceb.appspot.com",
  messagingSenderId: "787265339407",
  appId: "1:787265339407:web:d5f4caff0d52e830ee637a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
