// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDer3pj47n5rcN2zoQQCtAPvbhac5HbUF0",
  authDomain: "phone-pager.firebaseapp.com",
  projectId: "phone-pager",
  storageBucket: "phone-pager.appspot.com",
  messagingSenderId: "614291515117",
  appId: "1:614291515117:web:8cc783e9f07db80c258ee4",
  measurementId: "G-ZLZ1FLFD3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);