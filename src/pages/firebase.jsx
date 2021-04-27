import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQy6ruOrAzaszb9-HGJn-b4QN5q-m2V5M",
  authDomain: "shar-8a6b9.firebaseapp.com",
  projectId: "shar-8a6b9",
  storageBucket: "shar-8a6b9.appspot.com",
  messagingSenderId: "592475453057",
  appId: "1:592475453057:web:55e96e6978c7c99a9a7f80",
  measurementId: "G-DK7DZCT964"
};

firebase.initializeApp(firebaseConfig);