import { setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase.config";
import { start } from "../Features/CharactersFound";
import { store } from "../index";

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

let userSpotted;

//Check if user found Waldo
export async function fetchCoordinates(
  characterName: string,
  position: number[],
  message: string,
  currentState: any // Pass the current state as an argument
) {
  try {
    // Get a reference to the document within the 'coordinates' collection
    const documentRef = doc(db, "coordinates", characterName);

    // Retrieve the document data
    const documentSnapshot = await getDoc(documentRef);

    if (documentSnapshot.exists()) {
      // Extract the coordinates from the document snapshot
      const coordinates = documentSnapshot.data();

      console.log(`${characterName} coordinates:`, coordinates);

      //Compare user coordinates with the ones saved to database
      if (
        position[0] >= coordinates.x[0] &&
        position[0] <= coordinates.x[1] &&
        position[1] >= coordinates.y[0] &&
        position[1] <= coordinates.y[1]
      ) {
        // Dispatch an action to update the state
        // Access the state directly from the currentState argument
        const found = currentState.counter.value.found;

        store.dispatch({
          type: "UPDATE DATA",
          payload: { found: found + 1 },
        });

        const unsubscribe = store.subscribe(() => {
          const updatedFound = store.getState().counter.value.found;
          console.log(updatedFound); // Log the updated value
          unsubscribe(); // Unsubscribe to avoid further logs
        });

        //Add different messages to the modal depending
        //on what user clicks
        const modal = document.getElementById("myModal"); // Refactor, use state instead and don't change DOM elements directly
        const text = document.getElementById("message"); // Refactor, use state instead and don't change DOM elements directly
        if (modal && text) {
          modal.style.display = "block";
          text.textContent = message;
        }
        userSpotted = characterName;
        console.log("Spotted " + userSpotted);
      } else {
        const modal = document.getElementById("myModal"); // Refactor, use state instead and don't change DOM elements directly
        const text = document.getElementById("message"); // Refactor, use state instead and don't change DOM elements directly
        if (modal && text) {
          modal.style.display = "block";
          text.textContent = "Wrong selection, keep searching";
        }
        console.log("wrong selection");
      }
    } else {
      console.log(`${characterName} coordinates not found`);
    }
  } catch (error) {
    console.log(`Error fetching ${characterName} coordinates:`, error);
  }
}

export default coordinates;

// This "const found = currentState.characters.value.found;" becomes
// const found = currentState.whatever-name-i-give-the-slice.value.found;
