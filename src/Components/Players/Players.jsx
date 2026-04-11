import React, { use, useState } from "react";
import Player from "./Player";
import SelectedPlayers from "./SelectedPlayers";

const Players = ({ playersPromise, setCoin, coin }) => {
  const playersData = use(playersPromise);
  // console.log(playersData);

  const [selectedType, setSelectedType] = useState("available"); //This is for Button toggoling.

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  return (
    <div className="container mx-auto px-2 md:px-0">
      <div className="flex justify-between items-center my-5">
        {selectedType === "available" ? (
          <h2 className="text-2xl font-bold">Available Players</h2>
        ) : (
          <h2 className="text-2xl font-bold">
            Selected Player ({selectedPlayers.length}/{playersData.length})
          </h2>
        )}
        <div className="flex flex-col md:flex-row">
          <button
            onClick={() => setSelectedType("available")}
            className={`btn rounded-r-none rounded-l-xl 
              ${selectedType === "available" ? "bg-[#E7FE29]" : ""}
              `}
          >
            Available
          </button>
          <button
            onClick={() => setSelectedType("selected")}
            className={`btn rounded-l-none rounded-r-xl 
              ${selectedType === "selected" ? "bg-[#E7FE29]" : ""}
              `}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>

      {selectedType === "available" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {playersData.map((player) => (
            <Player
              key={player.id}
              player={player}
              setCoin={setCoin}
              coin={coin}
              setSelectedPlayers={setSelectedPlayers}
              selectedPlayers={selectedPlayers}
            ></Player>
          ))}
        </div>
      ) : (
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          setCoin={setCoin}
          coin={coin}
        ></SelectedPlayers>
      )}
    </div>
  );
};

export default Players;
