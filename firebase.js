// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANLPJ1zucii68jfHgawXWteYhR2Qb2iGg",
  authDomain: "inventory-management-app-8ca8b.firebaseapp.com",
  projectId: "inventory-management-app-8ca8b",
  storageBucket: "inventory-management-app-8ca8b.appspot.com",
  messagingSenderId: "1060687754762",
  appId: "1:1060687754762:web:c26ade1ebf062baa3d11f3",
  measurementId: "G-VCV35F1JHL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export {firestore}