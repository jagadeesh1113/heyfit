import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCiGj4Wr6mLT1iTXCJSB_gRNjCHd9sJ_lc",
  authDomain: "heyfit-a8ffc.firebaseapp.com",
  databaseURL:
    "https://heyfit-a8ffc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "heyfit-a8ffc",
  storageBucket: "heyfit-a8ffc.firebasestorage.app",
  messagingSenderId: "157105179513",
  appId: "1:157105179513:web:e685f04953251e7b36bda8",
  measurementId: "G-RCLJZVE78Z",
};

const config = initializeApp(firebaseConfig);

const firestoreDb = getFirestore(config);
const firebaseAuth = getAuth();

export { firestoreDb, firebaseAuth };
