// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAz2xjDiEcFdUdxxcbNRhzhTMSB4TisNNQ",
    authDomain: "education-client-42d2a.firebaseapp.com",
    projectId: "education-client-42d2a",
    storageBucket: "education-client-42d2a.appspot.com",
    messagingSenderId: "67131665594",
    appId: "1:67131665594:web:d6e424775d5b876c9aa683"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;