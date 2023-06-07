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

  const characterTwo = "Wally";
  const wallyInfo = {
    x: [279, 298],
    y: [605, 710],
  };

  const documentRefTwo = doc(db, "coordinates", characterTwo);
  setDoc(documentRefTwo, wallyInfo)
    .then(() => {
      console.log("wally coordinates saved");
    })
    .catch((error) => {
      console.log(error + " wally coordinates not saved");
    });

  const characterThree = "Wizard";
  const wizardInfo = {
    x: [600, 690],
    y: [779, 835],
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

//Check if user found Wally
export async function fetchCoordinates(
  characterName: string,
  position: number[]
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

      if (position[0] >= coordinates.x[0] && position[0] <= coordinates.x[1]) {
        console.log("right selection");
      } else {
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
