import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB27SGXgdwirlR4OQZRViA7Tiebhy20Fcw",
  authDomain: "clone-fa9c5.firebaseapp.com",
  projectId: "clone-fa9c5",
  storageBucket: "clone-fa9c5.appspot.com",
  messagingSenderId: "879789379315",
  appId: "1:879789379315:web:78156259695dd94e1ef186",
  measurementId: "G-MHT9B4W6KN"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();

export{db,auth};