// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzw8tGLnOpW5wEIjLu-efk-V_6jZDRcRk",
  authDomain: "nextjs-firebase-auth-d86ab.firebaseapp.com",
  projectId: "nextjs-firebase-auth-d86ab",
  storageBucket: "nextjs-firebase-auth-d86ab.firebasestorage.app",
  messagingSenderId: "381206726577",
  appId: "1:381206726577:web:f9f1a64ea6afb6fe6f9f90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);