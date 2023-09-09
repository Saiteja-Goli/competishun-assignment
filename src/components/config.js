// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlX-Bt2y__yta39ZtTo6g9AlOeuLg1XL8",
  authDomain: "nutrition-7bc53.firebaseapp.com",
  projectId: "nutrition-7bc53",
  storageBucket: "nutrition-7bc53.appspot.com",
  messagingSenderId: "1058410092292",
  appId: "1:1058410092292:web:4e933bfc9fd2f7b1182251",
  measurementId: "G-QRFR97FFL6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth=getAuth(app)
const provider=new GoogleAuthProvider();

export {auth,provider}
