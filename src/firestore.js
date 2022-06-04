import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA9sqb3hgMq_U9nzawM_-7orWrYx-IyTug",
  authDomain: "customer-crud-b24fa.firebaseapp.com",
  projectId: "customer-crud-b24fa",
  storageBucket: "customer-crud-b24fa.appspot.com",
  messagingSenderId: "1042156942664",
  appId: "1:1042156942664:web:d4f9dcb403834d252b2f7d",
  measurementId: "G-7EJZT17LCB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;

