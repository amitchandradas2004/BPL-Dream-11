import React, { use } from "react";
import Player from "./Player";

const Players = ({ playersPromise }) => {
  const playersData = use(playersPromise);
  // console.log(playersData);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 container mx-auto">
        {playersData.map((player) => (
          <Player key={player.id} player={player}></Player>
        ))}
      </div>
    </div>
  );
};

export default Players;
