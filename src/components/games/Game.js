import React from "react";

const Game = (props) => {
//   const [game, setGame] = useState({ ...props.game });

  return (
    <div className="game-list-container">
        <div onClick={() => props.setView(props.game.id)} className="game-card">
          <img src={props.game.img} />
          <h2>{props.game.name}</h2>
          <h5>{props.game.game_genre}</h5>
          
        </div>
          
    </div>
  );
};

export default Game;


