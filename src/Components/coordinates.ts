import { setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase.config";

function coordinates() {
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
      console.log("coordinates saved successfully");
    })
    .catch((error) => {
      console.log(error + "failed to upload");
    });

  const characterTwo = "Odlaw";
  const odlawInfo = {
    x: [279, 298],
    y: [605, 710],
  };

  const documentRefTwo = doc(db, "coordinates", characterTwo);
  setDoc(documentRefTwo, odlawInfo)
    .then(() => {
      console.log("Odlaw coordinates saved");
    })
    .catch((error) => {
      console.log(error + " Odlaw coordinates not saved");
    });

  const characterThree = "Wizard";
  const wizardInfo = {
    x: [779, 835],
    y: [600, 690],
  };

  const documentRefThree = doc(db, "coordinates", characterThree);
  setDoc(documentRefThree, wizardInfo)
    .then(() => {
      console.log("wizard coordinates saved");
    })
    .catch((error) => {
      console.log(error + " wizard coordinates not saved");
    });
}

export default coordinates;

// This "const found = currentState.characters.value.found;" becomes
// const found = currentState.whatever-name-i-give-the-slice.value.found;
