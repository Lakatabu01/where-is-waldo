import React, { ReactElement, SyntheticEvent, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { start } from "../Features/Timer";
import { Leaderboard } from "./leaderboard";
import {
  setDoc,
  doc,
  collection,
  query,
  orderBy,
  getDocs,
} from "firebase/firestore";
import { useState } from "react";
import { db } from "../Firebase/firebase.config";
import {
  ModalContent,
  Span,
  Text,
  InputGroup,
  Input,
  Label,
  Button,
  Modal,
} from "../Styles/WinnerModal.style";

interface TimerProps {
  levelSelected: boolean;
  charactersFound: number;
}

const Count: React.FC<TimerProps> = ({ levelSelected, charactersFound }) => {
  interface Value {
    timer: { value: { seconds: number; isRunning: boolean; found: number } };
  }

  const [announcement, setAnnouncement] = useState<boolean>(false);
  const [showScore, setShowScore] = useState<boolean>(false);

  const timer = useSelector((state: Value) => state.timer.value);
  const dispatch = useDispatch();
  const timerRef = useRef(timer);

  useEffect(() => {
    timerRef.current = timer;
  }, [timer]);

  useEffect(() => {
    if (levelSelected && charactersFound < 3 && timer.isRunning) {
      const interval = setInterval(() => {
        dispatch(
          start({
            seconds: timerRef.current.seconds + 1, // Access the latest timer value from the reference
            isRunning: timerRef.current.isRunning, // Access the latest timer value from the reference
          })
        );
      }, 1000);

      return () => clearInterval(interval);
    } else {
      setAnnouncement(true);
      console.log("please enter your name");
    }
  }, [levelSelected, charactersFound, dispatch]);

  const handleClick = () => {
    setAnnouncement(false);
    setShowScore(true);
  };

  //Review this function thoroughly
  const pushPlayerInfoToDatabase = async (
    e: SyntheticEvent<HTMLInputElement>
  ) => {
    try {
      // Generate a unique document ID for the player
      const playerDocRef = doc(collection(db, "leaderboard"));
      console.log("uploading");
      // Add the player's information to the document
      await setDoc(playerDocRef, {
        playerName: e.currentTarget.value,
        playerSeconds: timerRef.current.seconds,
      });

      console.log("Player information saved successfully");
    } catch (error) {
      console.log("Failed to save player information:", error);
    }
  };

  return (
    <div>
      {announcement && (
        <>
          <Modal id="TheModal">
            <ModalContent>
              {/*<Span onClick={closeModal}> &times; </Span>*/}
              <Text id="message"> Congratulations, you won!</Text>
              <InputGroup>
                <Label>
                  Enter your name
                  <Input onBlur={(e) => pushPlayerInfoToDatabase(e)} />
                </Label>
              </InputGroup>
              <Button onClick={() => handleClick()}> Submit</Button>
            </ModalContent>
          </Modal>
        </>
      )}

      {showScore && (
        <>
          <Leaderboard />
        </>
      )}
    </div>
  );
};

export default Count;

//then create a high score board
//create a modal that asks for user's name
//find a way to push it to the scoreboard where the position depends on the time
//get the high score board from the database and display it on a modal
//Properly comment the codebase
//Remove all console.log statements
