// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI8EIa_qinogzT-SKZXO_MYzedtBmzEZE",
  authDomain: "coffee-store-app-720e7.firebaseapp.com",
  projectId: "coffee-store-app-720e7",
  storageBucket: "coffee-store-app-720e7.firebasestorage.app",
  messagingSenderId: "164060629212",
  appId: "1:164060629212:web:9557eaed367b00e76b4c19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);