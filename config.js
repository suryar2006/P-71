import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
var firebaseConfig = {
  apiKey: "AIzaSyDBxuRrtcyb_jag2D6BHuod5IUD8socWow",
  authDomain: "e-ride-1cde3.firebaseapp.com",
  projectId: "e-ride-1cde3",
  storageBucket: "e-ride-1cde3.appspot.com",
  messagingSenderId: "97361979329",
  appId: "1:97361979329:web:fd6cd2e2c73f778f49b140"
};




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


