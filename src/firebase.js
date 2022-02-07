// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBAES_APIKEY,
  authDomain: process.env.REACT_APP_FIREBAES_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBAES_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBAES_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBAES_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBAES_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
