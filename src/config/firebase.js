/*import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgYcATHoag1gmQqVxDF54TrtAg0lFMyCA",
  authDomain: "banco01-9cc24.firebaseapp.com",
  projectId: "banco01-9cc24",
  storageBucket: "banco01-9cc24.appspot.com",
  messagingSenderId: "318889163370",
  appId: "1:318889163370:web:8e1b3d85c4ccdcfb056813"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;*/


import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBgYcATHoag1gmQqVxDF54TrtAg0lFMyCA",
  authDomain: "banco01-9cc24.firebaseapp.com",
  projectId: "banco01-9cc24",
  storageBucket: "banco01-9cc24.appspot.com",
  messagingSenderId: "318889163370",
  appId: "1:318889163370:web:8e1b3d85c4ccdcfb056813"
};
  
firebase.initializeApp(firebaseConfig);
export default firebase;