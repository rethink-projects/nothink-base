import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import {
  getFirestore,
  getDocs,
  collection,
} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAqk4ALbm2bcOw5pWAzQfVJEU1Wbyqp7nM",
  authDomain: "nothink-base.firebaseapp.com",
  projectId: "nothink-base",
  storageBucket: "nothink-base.appspot.com",
  messagingSenderId: "1021773995282",
  appId: "1:1021773995282:web:960dd77584c633222c67cb",
  measurementId: "G-8BH7TD8TBV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

getDocs(collection(db, "notes")).then((result) => {
  result.forEach((doc) => {
    console.log(doc.data());
  });
});
