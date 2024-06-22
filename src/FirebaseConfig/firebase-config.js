// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqErgtQciEuzLpkYQUbYvpx37MTa1zT1k",
  authDomain: "experiment-crud-auth.firebaseapp.com",
  projectId: "experiment-crud-auth",
  storageBucket: "experiment-crud-auth.appspot.com",
  messagingSenderId: "774632896950",
  appId: "1:774632896950:web:17cd84e155e6f701d86917"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth