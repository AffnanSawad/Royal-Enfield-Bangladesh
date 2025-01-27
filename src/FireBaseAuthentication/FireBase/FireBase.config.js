// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFXmnkGyDYw96mRNgpskTGmOnjgjCMRRg",
  authDomain: "royal-enfield-a59da.firebaseapp.com",
  projectId: "royal-enfield-a59da",
  storageBucket: "royal-enfield-a59da.firebasestorage.app",
  messagingSenderId: "903380412099",
  appId: "1:903380412099:web:c2dfa7d349a361de8da476"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export app
export const auth = getAuth(app);