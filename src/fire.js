import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAYRp1uk1L7Pfc3GRLmqVjdoRukpcIsP6E",
    authDomain: "login-9aafa.firebaseapp.com",
    projectId: "login-9aafa",
    storageBucket: "login-9aafa.appspot.com",
    messagingSenderId: "700771896244",
    appId: "1:700771896244:web:e06f4e2fe02809c67a80e1"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;