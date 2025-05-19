// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxHyD3OKMLhlnMug3pgmX2_u8zeJNBe-w",
  authDomain: "coffee-store-app2.firebaseapp.com",
  projectId: "coffee-store-app2",
  storageBucket: "coffee-store-app2.firebasestorage.app",
  messagingSenderId: "1019809982612",
  appId: "1:1019809982612:web:53d7e9604764d75329ec81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);