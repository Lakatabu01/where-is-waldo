import React from "react";
import GamePhoto from "../Styles/GamePhoto";
import { FC } from "react";
import coordinates from "./coordinates";
import Highlighter from "../Styles/Highlighter.style";
import CharacterSelector from "../Styles/CharacterSelector";
import { Button } from "../Styles/Buttons.styles";
import { TheModal } from "../Styles/Modal.style";
import { useState } from "react";
import Count from "./countLogic";
import { useDispatch, useSelector } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase.config";
import { start } from "../Features/CharactersFound";

coordinates();

interface GameProp {
  onClick?: React.MouseEventHandler;
}

const Game: FC<GameProp> = ({ onClick }) => {
  const [loading, setLoading] = useState(false);

  const image =
    "https://firebasestorage.googleapis.com/v0/b/where-is-waldo-f828f.appspot.com/o/where's-waldo1.jpg?alt=media&token=ef608e8f-1542-44cc-a3c9-f9cc957122c1";

  let currentUserSelection: number[] = [];
  const dispatch = useDispatch();
  const [foundCharacters, setFoundCharacters] = useState<string[]>([]);

  interface Value {
    counter: { value: { found: number } };
  }

  const selector = useSelector((state: Value) => state.counter.value);
  const charactersFound = selector.found;

  let userSpotted;

  //Check if user found Waldo
  const fetchCoordinates = async (
    characterName: string,
    position: number[],
    message: string
  ) => {
    if (!loading) {
      setLoading(true);

      // Check if the character has already been found
      if (foundCharacters.includes(characterName)) {
        setLoading(false);
        return;
      }
      try {
        // Get a reference to the document within the 'coordinates' collection
        const documentRef = doc(db, "coordinates", characterName);

        // Retrieve the document data
        const documentSnapshot = await getDoc(documentRef);

        if (documentSnapshot.exists()) {
          // Extract the coordinates from the document snapshot
          const coordinates = documentSnapshot.data();

          //Compare user coordinates with the ones saved to database
          if (
            position[0] >= coordinates.x[0] &&
            position[0] <= coordinates.x[1] &&
            position[1] >= coordinates.y[0] &&
            position[1] <= coordinates.y[1]
          ) {
            // Dispatch an action to update the state
            // Access the state directly from the currentState argument

            if (!foundCharacters.includes(characterName)) {
              // Dispatch an action to update the state
              dispatch(start({ found: charactersFound + 1 }));

              // Add the character to the found characters list
              setFoundCharacters([...foundCharacters, characterName]);
            }

            //Add different messages to the modal depending on what user clicks
            const modal = document.getElementById("myModal"); // Refactor, use state instead and don't change DOM elements directly
            const text = document.getElementById("message"); // Refactor, use state instead and don't change DOM elements directly
            if (modal && text) {
              modal.style.display = "block";
              text.textContent = message;
            }
            userSpotted = characterName;
          } else {
            const modal = document.getElementById("myModal"); // Refactor, use state instead and don't change DOM elements directly
            const text = document.getElementById("message"); // Refactor, use state instead and don't change DOM elements directly
            if (modal && text) {
              modal.style.display = "block";
              text.textContent = "Wrong selection, keep searching";
            }
          }
        } else {
          console.log(`${characterName} coordinates not found`);
        }
      } catch (error) {
        console.log(`Error fetching ${characterName} coordinates:`, error);
      }
      setLoading(false);
    }
  };

  const highlight = (e: React.MouseEvent<Element, MouseEvent>) => {
    const highlighter = document.getElementById("marker");
    if (highlighter) {
      highlighter.style.display = "block";
      highlighter.style.top = e.pageY - 120 + "px";
      highlighter.style.left = e.pageX - 20 + "px";
      currentUserSelection = [e.pageX, e.pageY];
      displayOptions(e);

      setTimeout(unhighlight, 750);
    }
  };

  const unhighlight = () => {
    const highlighter = document.getElementById("marker");
    if (highlighter) {
      highlighter.style.display = "none";
    }
  };

  const displayOptions = (e: React.MouseEvent<Element, MouseEvent>) => {
    const selector = document.getElementById("selector");
    if (selector) {
      selector.style.display = "flex";
      selector.style.top = e.pageY - 120 + "px";
      selector.style.left = e.pageX + 50 + "px";
      setTimeout(removeOptions, 3000);
    }
  };

  const removeOptions = () => {
    const selector = document.getElementById("selector");
    if (selector) {
      selector.style.display = "none";
    }
  };

  const waldoMessage = "Bravo you found Waldo";
  const odlawMessage = "Bravo you found Odlaw";
  const wizardMessage = "Bravo you found the Wizard";

  return (
    <div style={{ position: "relative" }} onClick={onClick}>
      <GamePhoto id="game-image" src={image} onClick={highlight} />
      <Highlighter id="marker" />

      <CharacterSelector id="selector">
        <Button
          bgColor="white"
          onClick={() =>
            fetchCoordinates("Waldo", currentUserSelection, waldoMessage)
          }
        >
          Waldo
        </Button>

        <Button
          bgColor="white"
          onClick={() =>
            fetchCoordinates("Odlaw", currentUserSelection, odlawMessage)
          }
        >
          Odlaw
        </Button>

        <Button
          bgColor="white"
          onClick={() =>
            fetchCoordinates("Wizard", currentUserSelection, wizardMessage)
          }
        >
          Wizard
        </Button>
      </CharacterSelector>

      <TheModal />
      <Count charactersFound={charactersFound} />
    </div>
  );
};

export default Game;
