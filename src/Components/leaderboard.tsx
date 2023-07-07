import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebase.config";
import React, { useEffect, useState } from "react";
import { DocumentData } from "firebase/firestore";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { start } from "../Features/Timer";
import { check } from "../Features/ReloadSlice";
import { Button } from "../Styles/Buttons.styles";
import {
  ScoreModal,
  ModalContent,
  Text,
  Flex,
} from "../Styles/HighScoreModal.style";

export const Leaderboard: React.FC = () => {
  const [leaderboardData, setLeaderboardData] = useState<DocumentData[]>([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Use hook to fetch previous scores from the database
  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        // Query the "leaderboard" collection and order the results by the "seconds" field
        const q = query(
          collection(db, "leaderboard"),
          orderBy("playerSeconds")
        );
        const querySnapshot = await getDocs(q);

        // Get the data from the query snapshot and update the state
        const data = querySnapshot.docs.map((doc) => doc.data());

        setLeaderboardData(data);
      } catch (error) {
        console.log("Failed to fetch leaderboard data:", error);
      }
    };

    fetchLeaderboardData();
  }, []);

  const reload = () => {
    dispatch(
      start({
        seconds: 0,
      })
    );

    //Update reload state to true
    dispatch(
      check({
        reload: true,
      })
    );
    navigate("/");
  };

  return (
    <ScoreModal>
      <ModalContent>
        <Text>
          <h1>Leaderboard</h1>
          <ul>
            {leaderboardData.map((player, index) => (
              <li key={index}>
                <Flex>
                  <h4>{player.playerName}</h4>
                  <h4>{player.playerSeconds} seconds</h4>
                </Flex>
              </li>
            ))}
          </ul>
        </Text>
        <NavLink to="/where-is-waldo/">
          <Button bgColor="purple" onClick={reload}>
            Go to homepage
          </Button>
        </NavLink>
      </ModalContent>
    </ScoreModal>
  );
};
