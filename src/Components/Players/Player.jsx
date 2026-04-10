import React from "react";

const Player = ({ player }) => {
  console.log(player);

  return (
    <div>
      <h2>Name: {player.name}</h2>
      <h3>Country: {player.country}</h3>
    </div>
  );
};

export default Player;
