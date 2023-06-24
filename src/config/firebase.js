import firebase from "firebase/compat/app"
import "firebase/compat/auth";
// import "firebase/compat/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAba82ZLpdO3W_g3C8cBu7Rgm53FgdIUQc",
    authDomain: "file-management-system-45050.firebaseapp.com",
    projectId: "file-management-system-45050",
    storageBucket: "file-management-system-45050.appspot.com",
    messagingSenderId: "607132873377",
    appId: "1:607132873377:web:b5138e63247d57d42276e0",
    measurementId: "G-6TZL6BFLDY"
  };
  const fire = firebase.initializeApp(firebaseConfig)
  export default fire