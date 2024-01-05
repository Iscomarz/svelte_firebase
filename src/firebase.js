// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsiyJ4uf8xM4nmyvPtXz_3xu984Hm4naE",
  authDomain: "sveltefirebase-3dc79.firebaseapp.com",
  projectId: "sveltefirebase-3dc79",
  storageBucket: "sveltefirebase-3dc79.appspot.com",
  messagingSenderId: "971587689625",
  appId: "1:971587689625:web:8556d00a025b68d288ac08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);