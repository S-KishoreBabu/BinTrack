import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfigAuth = {
  apiKey: "AIzaSyBnwvRI9w_05_IWBVp4S6WUGhpayGKjAkk",
  authDomain: "durable-bit-488408-t4.firebaseapp.com",
  projectId: "durable-bit-488408-t4",
  storageBucket: "durable-bit-488408-t4.firebasestorage.app",
  messagingSenderId: "718595593757",
  appId: "1:718595593757:web:e93b39f7cceadf62a218f4"
};

const appAuth = initializeApp(firebaseConfigAuth, "authApp");

const auth = getAuth(appAuth);

export { auth };