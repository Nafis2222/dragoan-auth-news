// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

console.log('inside firebase config', import.meta.env.VITE_PASS)

const firebaseConfig = {
  apiKey: import.meta.env.VITE_PASS,
  authDomain: "react-dragoan-news-auth.firebaseapp.com",
  projectId: "react-dragoan-news-auth",
  storageBucket: "react-dragoan-news-auth.appspot.com",
  messagingSenderId: "1045781952108",
  appId: "1:1045781952108:web:d51699070a12a9926b8a49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;