// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId,
// };
const firebaseConfig = {
    apiKey: "AIzaSyAv-IyhccP7hiEjaQpmNBtpL7PT_ptkbpU",
    authDomain: "red-onion-project-9c95a.firebaseapp.com",
    projectId: "red-onion-project-9c95a",
    storageBucket: "red-onion-project-9c95a.appspot.com",
    messagingSenderId: "758525196773",
    appId: "1:758525196773:web:791a08bcf850f9cb53170c"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;