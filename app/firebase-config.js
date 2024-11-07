// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";   
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXOqmK5OyrHB2wwTncoNiTBeAhzQSvhuc",
  authDomain: "trapstatixn.firebaseapp.com",
  projectId: "trapstatixn",
  storageBucket: "trapstatixn.firebasestorage.app",
  messagingSenderId: "42852598124",
  appId: "1:42852598124:web:38f5b8a3a4035858673349",
  measurementId: "G-XYRDJY10M0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Disable app verification for testing purposes (ONLY in development)
if (process.env.NODE_ENV === 'development') {
  auth.settings.appVerificationDisabledForTesting = true;
}