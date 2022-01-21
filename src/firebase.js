// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk3SDuo13664jbCNADS7S50FY2cTwKxMg",
  authDomain: "starbucks-clone-72d8e.firebaseapp.com",
  projectId: "starbucks-clone-72d8e",
  storageBucket: "starbucks-clone-72d8e.appspot.com",
  messagingSenderId: "873807043708",
  appId: "1:873807043708:web:56ce414a5f41e23ce8fdf9",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
