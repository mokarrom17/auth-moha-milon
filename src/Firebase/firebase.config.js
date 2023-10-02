// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArSWTRxM6nDmB8XCADhCCwDr_Oe2KJZk4",
    authDomain: "auth-moha-milon-2ac40.firebaseapp.com",
    projectId: "auth-moha-milon-2ac40",
    storageBucket: "auth-moha-milon-2ac40.appspot.com",
    messagingSenderId: "163858276175",
    appId: "1:163858276175:web:6b3043ce8e6dda847d6f3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;