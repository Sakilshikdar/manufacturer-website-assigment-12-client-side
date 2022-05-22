// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoI8JfBjPFW7NguLQoBMueXo3TxrsdJCA",
  authDomain: "manufacturer-website-2ba74.firebaseapp.com",
  projectId: "manufacturer-website-2ba74",
  storageBucket: "manufacturer-website-2ba74.appspot.com",
  messagingSenderId: "187026480031",
  appId: "1:187026480031:web:adfc0c384d88cd19437baa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;