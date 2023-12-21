/* file: signupScript.js */

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";

import { 
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-HOo4dN79-d0Z1e3sWwuF-UGvlSmhcMc",
    authDomain: "testfile-1aec5.firebaseapp.com",
    projectId: "testfile-1aec5",
    storageBucket: "testfile-1aec5.appspot.com",
    messagingSenderId: "103563495546",
    appId: "1:103563495546:web:382b619c7e501f1e6053c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const authForm = document.querySelector("#authForm");
const signUpButton = document.querySelector("#signUpButton");
const signInButtonG = document.getElementById("signInButtonG");
const userEmailG = document.getElementById("userEmailG");

const userSignUp = async () => {
    const signUpEmail = userEmail.value;
    const signUpPassword = userPassword.value;
    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
    .then(() => {
        alert("Your account has been created!");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });
}

const userSignInG = async () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        const user = result.user
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}

const checkAuthState = async () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is authenticated, redirect to the dashboard page
            window.location.href = "/dashboard";
        } else {
            // User is not authenticated, continue displaying the login form
            authForm.style.display = "block";
        }
    });
}

checkAuthState();

signUpButton.addEventListener("click", userSignUp);
signInButtonG.addEventListener("click", userSignInG);
