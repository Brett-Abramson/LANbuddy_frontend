import React, { useState } from "react";

const Game = (props) => {
//   const [game, setGame] = useState({ ...props.game });

  return (
    <div className="edit-container">
        <div onClick={() => props.setView(props.game.id)} className="game-card">
          <img src={props.game.img} />
          <h2>{props.game.name}</h2>
          <h5>{props.game.genre}</h5>
          
        </div>
          
    </div>
  );
};

export default Game;

// each game will house its own users -- run get route in each game component? or pass it in
