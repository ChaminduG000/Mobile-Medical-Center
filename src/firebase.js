
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXR0sh_vf6yfRMcz_jBGQnXWIva8uFeg0",
  authDomain: "ecg-signal-data.firebaseapp.com",
  databaseURL: "https://ecg-signal-data-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ecg-signal-data",
  storageBucket: "ecg-signal-data.appspot.com",
  messagingSenderId: "341514934731",
  appId: "1:341514934731:web:9ea980f7539aa260543e4e",
  measurementId: "G-927HBPEEWH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth, app,  onAuthStateChanged };
