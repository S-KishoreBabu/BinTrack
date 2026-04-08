import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, off } from "firebase/database";

const firebaseConfigDB = {
  apiKey: "AIzaSyCzi2IsDsZE5WIA7KpDgS-0RFs6vxSDqDY",
  authDomain: "brave-design-417105.firebaseapp.com",
  databaseURL: "https://brave-design-417105-default-rtdb.firebaseio.com",
  projectId: "brave-design-417105",
  storageBucket: "brave-design-417105.appspot.com",
  messagingSenderId: "218139478751",
  appId: "1:218139478751:web:a8a36aeab810976906b76a"
};

const appDB = initializeApp(firebaseConfigDB, "dbApp");

const db = getDatabase(appDB);

export { db, ref, onValue, off };