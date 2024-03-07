// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "freedom-lost-site.firebaseapp.com",
  projectId: "freedom-lost-site",
  storageBucket: "freedom-lost-site.appspot.com",
  messagingSenderId: "78024404814",
  appId: "1:78024404814:web:733950b0013e569fef781f",
  measurementId: "G-W6M634SQBV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
