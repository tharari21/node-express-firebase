// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA13RcWyYSGZOe7HPSP5iz5OEdvf6m0xwI",
  authDomain: "tutorial-bb07a.firebaseapp.com",
  projectId: "tutorial-bb07a",
  storageBucket: "tutorial-bb07a.appspot.com",
  messagingSenderId: "652123501053",
  appId: "1:652123501053:web:50b40dab9983e6eed6e994",
  measurementId: "G-GT5D9EQXWZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);
export default db;
