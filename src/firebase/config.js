// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXHfkm3ss2nJrPuGmG2dePPGSpabx9o0c",
  authDomain: "actividad-15-d998b.firebaseapp.com",
  databaseURL: "https://actividad-15-d998b-default-rtdb.firebaseio.com",
  projectId: "actividad-15-d998b",
  storageBucket: "actividad-15-d998b.appspot.com",
  messagingSenderId: "99301731917",
  appId: "1:99301731917:web:557ef69321a1a60fd07604"
};

// Initialize Firebase
const db = initializeApp(firebaseConfig);
export default getDatabase(db);