// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANqWeh1yXsXwyYKySqFEuGhjA7a36aYAg",
  authDomain: "experiment-crud-auth-53955.firebaseapp.com",
  projectId: "experiment-crud-auth-53955",
  storageBucket: "experiment-crud-auth-53955.appspot.com",
  messagingSenderId: "812122745472",
  appId: "1:812122745472:web:00ab163c030a3c99a1d465",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
