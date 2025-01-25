// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//1 import et
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpKqweNt0VW24wrvmx8aeBOjCiaFf-Opo",
  authDomain: "chatapp-57a61.firebaseapp.com",
  projectId: "chatapp-57a61",
  storageBucket: "chatapp-57a61.firebasestorage.app",
  messagingSenderId: "1078381085404",
  appId: "1:1078381085404:web:4b1eb4c2c7342649a5aa19",
};

// Initialize Firebase(yerleşik)
const app = initializeApp(firebaseConfig);

// 2- firebase auth hizmetlerine erişebilmek için kurulum
export const auth = getAuth(app);

//3- google auth hizmetlerini kullanabilmek için kurulum
export const provider = new GoogleAuthProvider();

// 4- firestore veritbanının kurulumunu yap
export const db = getFirestore(app);
