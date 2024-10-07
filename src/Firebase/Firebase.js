// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID,
//   measurementId: import.meta.env.VITE_MEASUREMENTID
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// export default auth;



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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