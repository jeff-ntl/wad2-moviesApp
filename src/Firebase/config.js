//1. import the dependencies
import firebase from "firebase";
import "firebase/auth";

//2. Initialize app with the config vars
const app = firebase.initializeApp({
    apiKey: "AIzaSyCDgD72R6UhrzLIs5oXG1kKwJZJxVVQUVc",
    authDomain: "movie-app-9ddae.firebaseapp.com",
    projectId: "movie-app-9ddae",
    storageBucket: "movie-app-9ddae.appspot.com",
    messagingSenderId: "1020378950478",
    appId: "1:1020378950478:web:5d29422d132aeab0b0cc1f",
    measurementId: "G-BTP6PQ6EEX"
});

//3. export it for use
export default app;