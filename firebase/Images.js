import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAan8r0h6byFS4-v69CXI4pSY365QwuK6k",
  authDomain: "nbe-bank-e9db8.firebaseapp.com",
  databaseURL: "https://nbe-bank-e9db8-default-rtdb.firebaseio.com",
  projectId: "nbe-bank-e9db8",
  storageBucket: "nbe-bank-e9db8.appspot.com",
  messagingSenderId: "212771463478",
  appId: "1:212771463478:web:8ee600635225d9877b5397",
  measurementId: "G-RXC19YT8ZH"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
