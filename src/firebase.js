// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjT7lP8ZdIlscXF9eSta5YuQFm_jtkE-A",
  authDomain: "netflixgpt-efb7b.firebaseapp.com",
  projectId: "netflixgpt-efb7b",
  storageBucket: "netflixgpt-efb7b.firebasestorage.app",
  messagingSenderId: "487116608322",
  appId: "1:487116608322:web:8b32f5c696433c5d8deedb",
  measurementId: "G-LSKXJVVFH4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
