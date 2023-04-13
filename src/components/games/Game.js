import React, { useState } from "react";
import Edit from "./Edit";
import UserList from "../users/UserList";

const Game = (props) => {
//   const [game, setGame] = useState({ ...props.game });
  const [edit, setEdit] = useState(false);

  const toggleEdit = () => {
    setEdit(!edit);
  };

  return (
    <div className="edit-container">
      {edit ? (
        <Edit
        game={props.game}
        handleUpdate={props.handleUpdate}
          toggleEdit={toggleEdit}
          setEdit={setEdit}
          handleDelete={props.handleDelete}
          getGames={props.getGames}
        />
      ) : (
        <div className="game-card">
          <h2>{props.game.name}</h2>
          <button
            onClick={() => {
              toggleEdit();
            }}
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default Game;

// each game will house its own users -- run get route in each game component? or pass it in
