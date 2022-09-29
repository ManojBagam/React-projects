import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCoaeFZbnBEZgo80PHVTp-T3suybRUnR0E",
  authDomain: "emps-75070.firebaseapp.com",
  projectId: "emps-75070",
  storageBucket: "emps-75070.appspot.com",
  messagingSenderId: "846090777274",
  appId: "1:846090777274:web:efc9aff2fc106dbff58883"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
