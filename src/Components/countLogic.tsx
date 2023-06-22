import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { start } from "../Features/Timer";

interface TimerProps {
  levelSelected: boolean;
  charactersFound: number;
}

const Count: React.FC<TimerProps> = ({ levelSelected, charactersFound }) => {
  interface Value {
    timer: { value: { seconds: number; isRunning: boolean; found: number } };
  }

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
      console.log("please enter your name");
    }
  }, [levelSelected, charactersFound, dispatch]);

  return null; // No rendering needed for the Count component
};

export default Count;

//write how to automatically populate charactersFound in your game component
//then create a high score board
//create a modal that asks for user's name
//find a way to push it to the scoreboard where the position depends on the time
//get the high score board from the database and display it on a modal
//Properly comment the codebase
//Remove all console.log statements
