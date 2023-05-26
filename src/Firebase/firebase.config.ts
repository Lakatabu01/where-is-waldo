import { getFirestore, collection, setDoc, doc } from "firebase/firestore";
import { getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA9Z5zZ1629HDOV13ksaDUqFkz-BKYKE8Y",
  authDomain: "where-is-waldo-f828f.firebaseapp.com",
  databaseURL: "https://where-is-waldo-f828f-default-rtdb.firebaseio.com",
  projectId: "where-is-waldo-f828f",
  storageBucket: "where-is-waldo-f828f.appspot.com",
  messagingSenderId: "1088110362243",
  appId: "1:1088110362243:web:3206b689ba22417ce625b6",
  measurementId: "G-9DWHMM3YSP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
//Send the coordinates of hidden characters to the database
const characterOne = "Waldo";
const waldoInfo = {
  x: [645, 710],
  y: [590, 690],
};

// Get a reference to the document within the 'coordinates' collection
const documentRef = doc(db, "coordinates", characterOne);

// Set the coordinates data for the document
setDoc(documentRef, waldoInfo)
  .then(() => {
    // Coordinates saved successfully
  })
  .catch((error) => {
    // An error occurred while saving coordinates
  });

export { db };
