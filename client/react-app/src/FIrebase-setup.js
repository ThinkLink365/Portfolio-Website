// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZMDamN5ld2LJtVZ-CWeNr-1ybE5YXBks",
  authDomain: "personal-porfolio-d28bd.firebaseapp.com",
  projectId: "personal-porfolio-d28bd",
  storageBucket: "personal-porfolio-d28bd.appspot.com",
  messagingSenderId: "288119923635",
  appId: "1:288119923635:web:9ef2bf9f992de80af7e1c6",
  measurementId: "G-8JBFQ4G4JD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);