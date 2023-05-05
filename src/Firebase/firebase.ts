import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA9Z5zZ1629HDOV13ksaDUqFkz-BKYKE8Y",
    authDomain: "where-is-waldo-f828f.firebaseapp.com",
    databaseURL: "https://where-is-waldo-f828f-default-rtdb.firebaseio.com",
    projectId: "where-is-waldo-f828f",
    storageBucket: "where-is-waldo-f828f.appspot.com",
    messagingSenderId: "1088110362243",
    appId: "1:1088110362243:web:3206b689ba22417ce625b6",
    measurementId: "G-9DWHMM3YSP"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

//  getFirestore function is called with the app object as an argument 
//  to get a reference to the Firestore database
const db = getFirestore(app);

export { db };