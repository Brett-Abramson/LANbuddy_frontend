import { useState } from "react"
import React from 'react'
import UserList from "../users/UserList"
import AddUser from "../users/AddUser"
import Edit from "./Edit"

const GameDetails = (props) => {

  const [edit, setEdit] = useState(false);

  const toggleEdit = () => {
    setEdit(!edit);
  };
  const [hideUserAdd, setHideUserAdd] = useState(false)
  return (
    <div className="detail-page">
        <h3>{props.game.name}</h3>
        <button onClick={() => props.setView(true)}>back</button>
        <img src={props.game.img} alt="" />        
        <button onClick={toggleEdit}>Edit Game</button>
        {edit ?
        <>
            <Edit
            game={props.game}
            handleUpdate={props.handleUpdate}
              toggleEdit={toggleEdit}
              setEdit={setEdit}
              handleDelete={props.handleDelete}
              getGames={props.getGames}
            />
            </>
        : 
        <>
        <h3>{props.game.release_date}</h3>
        <h3>{props.game.game_genre}</h3>
        </>
        }
        <button onClick={() => setHideUserAdd(!hideUserAdd)}>Add User</button>
              {hideUserAdd ? 
              <AddUser handleUserCreate={props.handleUserCreate} hideUserAdd={hideUserAdd} setHideUserAdd={setHideUserAdd} game={props.game} />
              : null}
        <div className="users-container">
        <UserList 
        game={props.game}
        handleUserEdit={props.handleUserEdit}
        handleUserDelete={props.handleUserDelete}  />
        </div>
    </div>
  )
}

export default GameDetails