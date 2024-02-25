// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/database'; // Firebase Realtime adatbázis modul importálása

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKDOuFdaAlkJjQDbjpP-S6_Fq4rxxLjGs",
  authDomain: "cv-site-10ad3.firebaseapp.com",
  databaseURL: "https://cv-site-10ad3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cv-site-10ad3",
  storageBucket: "cv-site-10ad3.appspot.com",
  messagingSenderId: "125941372972",
  appId: "1:125941372972:web:46adf68b746edebc9ed989",
  measurementId: "G-RS8V2SM423"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app, analytics};