// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpIdbAwS0PKEVIwV5sXSxRiRig8qjVj7U",
  authDomain: "football-fixtures-a5ddd.firebaseapp.com",
  projectId: "football-fixtures-a5ddd",
  storageBucket: "football-fixtures-a5ddd.appspot.com",
  messagingSenderId: "433165186492",
  appId: "1:433165186492:web:94e6d29575fb11ce7ea7b9",
  measurementId: "G-WCCMDMLMYL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);