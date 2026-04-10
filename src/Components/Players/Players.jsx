import React, { use } from "react";
import Player from "./Player";

const Players = ({ playersPromise }) => {
  const playersData = use(playersPromise);
  console.log(playersData);

  return (
    <div>
      <h3>Players List : {playersData.length}</h3>
      {playersData.map((player) => (
        <Player player={player}></Player>
      ))}
    </div>
  );
};

export default Players;
