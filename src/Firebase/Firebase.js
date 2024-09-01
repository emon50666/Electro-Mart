// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBbYHMsSWFkrgK91iNVGUQqErKRUgm2F0g",
  authDomain: "electro-mart-client.firebaseapp.com",
  projectId: "electro-mart-client",
  storageBucket: "electro-mart-client.appspot.com",
  messagingSenderId: "488862218023",
  appId: "1:488862218023:web:ed6467c66f9ac625c55b02",
  measurementId: "G-JWLX3SPN9R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
