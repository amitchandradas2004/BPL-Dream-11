import React, { useState } from "react";
import { FaFlag, FaUser } from "react-icons/fa";

const Player = ({
  player,
  setCoin,
  coin,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  // console.log(player);
  const [isSelected, setIsSelected] = useState(false);
  const handleChoosePlayer = () => {
    let newCoin = coin - player.price;
    if (newCoin >= 0) {
      setCoin(coin - player.price);
    } else {
      alert("Not enough coin to purcase this player");
      return;
    }
    alert(`${player.name} is Selected`);
    setIsSelected(true);
    setSelectedPlayers([...selectedPlayers, player])
  };
  return (
    <div className="card bg-gray-100   shadow-lg items-center content-center mx-auto py-3 rounded-2xl">
      <figure>
        <img
          src={player.image}
          alt={player.name}
          className="w-[90%] h-50 rounded-2xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <FaUser /> {player.name}
        </h2>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FaFlag />
            <p className="font-bold">{player.country}</p>
          </div>
          <button className="btn btn-ghost">{player.type}</button>
        </div>
        <div className="divider"></div>
        <h3 className="font-bold">Rating: ({player.rating})</h3>
        <div className="flex justify-between items-center">
          <h4>{player.batting}</h4>
          <h4>{player.bowlling}</h4>
        </div>
        <div className="flex justify-between items-center gap-5">
          <h4 className="font-bold">Price: ${player.price}</h4>
          <button
            onClick={handleChoosePlayer}
            className="btn btn-ghost"
            disabled={isSelected === true ? true : false}
          >
            {isSelected === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Player;
