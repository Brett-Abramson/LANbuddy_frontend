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
        <button onClick={() => props.setView(true)}>back</button>
        <img src={props.game.img} alt="" />        
        <button onClick={toggleEdit}>Edit Game</button>
        {edit ?
            <Edit
            game={props.game}
            handleUpdate={props.handleUpdate}
              toggleEdit={toggleEdit}
              setEdit={setEdit}
              handleDelete={props.handleDelete}
              getGames={props.getGames}
            />
        : null}
        <h1>{props.game.name}</h1>
        <h3>{props.game.release_date}</h3>
        <h3>{props.game.game_genre}</h3>
        <button onClick={() => setHideUserAdd(!hideUserAdd)}>Add User</button>
              {hideUserAdd ? 
              <AddUser handleUserCreate={props.handleUserCreate} hideUserAdd={hideUserAdd} setHideUserAdd={setHideUserAdd} game={props.game} />
              : null}
        <UserList handleUserEdit={props.handleUserEdit} i={props.i} handleUserDelete={props.handleUserDelete} game={props.game} />
    
    </div>
  )
}

export default GameDetails