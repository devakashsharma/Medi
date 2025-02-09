// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkXl228njNJjXpaQLt7qp1n9pJPmdZ9kk",
  authDomain: "medi-5b7b0.firebaseapp.com",
  projectId: "medi-5b7b0",
  storageBucket: "medi-5b7b0.firebasestorage.app",
  messagingSenderId: "696541738298",
  appId: "1:696541738298:web:a3bc7f53e29fe7cc458c03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);