// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8HMKjMmuj40AyyyBbZlVGC2B-zW3Zpi4",
  authDomain: "simple-firebase-zero.firebaseapp.com",
  projectId: "simple-firebase-zero",
  storageBucket: "simple-firebase-zero.appspot.com",
  messagingSenderId: "5157993608",
  appId: "1:5157993608:web:0852074826b7bfd963f33d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;