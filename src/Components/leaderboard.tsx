import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebase.config";
import React, { useEffect, useState } from "react";
import { DocumentData } from "firebase/firestore";

export const Leaderboard: React.FC = () => {
  const [leaderboardData, setLeaderboardData] = useState<DocumentData[]>([]);

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

        //this is returning an empty array
        //find out why and fix!!
        setLeaderboardData(data);
      } catch (error) {
        console.log("Failed to fetch leaderboard data:", error);
      }
    };

    fetchLeaderboardData();
  }, []);

  useEffect(() => {
    console.log(leaderboardData);
  }, [leaderboardData]);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaderboardData.map((player, index) => (
          <li key={index}>
            {player.playerName} - {player.playerSeconds} seconds
          </li>
        ))}
      </ul>
    </div>
  );
};
