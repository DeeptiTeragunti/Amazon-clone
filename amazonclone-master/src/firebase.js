//Very important to import this
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA7xE00E1UJA8ukSSTWIQ22wIR0tnFZKy4",
  authDomain: "fir-55bee.firebaseapp.com",
  databaseURL: "https://fir-55bee.firebaseio.com",
  projectId: "fir-55bee",
  storageBucket: "fir-55bee.appspot.com",
  messagingSenderId: "554154471051",
  appId: "1:554154471051:web:b54238c267b8e655d2ee8e",
};

//installing firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// initialize the firebase database
const db = firebaseApp.firestore();

//initialize auth
const auth = firebase.auth();

export { db, auth };
