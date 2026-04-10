import React from "react";
import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  setCoin,
  coin,
}) => {
  // console.log(selectedPlayers);
  const handleDeleteSelectedPlayer = (player) => {
    // console.log(player);
    const filteredPlayer = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.name !== player.name,
    );
    setSelectedPlayers(filteredPlayer);
    toast(`${player.name} is removed`);
    // console.log(filteredPlayer);
    setCoin(coin + player.price);
  };
  return (
    <div>
      {selectedPlayers.length === 0 ? (
        <div className="text-center py-15 shadow-sm border border-gray-100 rounded-2xl space-y-2">
          <h2 className="text-4xl font-bold">No Players Selected</h2>
          <p>Go To Available tap to select players</p>
        </div>
      ) : (
        selectedPlayers.map((player) => {
          return (
            <div
              key={player.id}
              className="flex justify-between items-center border border-gray-300 rounded-2xl p-2 pr-5 shadow-sm my-3"
            >
              <div className="flex items-center gap-4">
                <img src={player.image} className="w-20 h-15 rounded-xl" />
                <div>
                  <h2 className="text-xl font-bold flex items-center gap-2 ">
                    <FaUser></FaUser> {player.name}
                  </h2>
                  <p className="italic">{player.type}</p>
                </div>
              </div>
              <button
                className="btn text-red-600"
                onClick={() => handleDeleteSelectedPlayer(player)}
              >
                <MdDelete></MdDelete>
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default SelectedPlayers;
