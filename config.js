// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKcE-U8z2HTs2b10TA3CECrTOEe8ZDplo",
  authDomain: "smart-changover.firebaseapp.com",
  projectId: "smart-changover",
  storageBucket: "smart-changover.appspot.com",
  messagingSenderId: "189633607097",
  appId: "1:189633607097:web:605078ecccd1d5a159b268",
  measurementId: "G-VYFYDX6NMN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);