// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1mEfrDwKCtSjD5YvsSVXWPPZd9vyS3tY",
  authDomain: "beeresh-6fcbc.firebaseapp.com",
  projectId: "beeresh-6fcbc",
  storageBucket: "beeresh-6fcbc.firebasestorage.app",
  messagingSenderId: "534433728987",
  appId: "1:534433728987:web:183fc2bb4bb9779c8cbffe",
  measurementId: "G-6PSDV6LG6M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);