import { useState } from "react"
import React from 'react'
import UserEdit from "./UserEdit"

const UserList = (props) => {
const [showUsers, setShowUsers] = useState(false)

  return (
    <div>
    {props.game.players.map((player) => {
      return(
        <div>
            <h3>{player.tag}</h3>
            <UserEdit player={player} handleUserEdit={props.handleUserEdit} />
            <button value={player} onClick={props.handleUserDelete}>x</button>
        </div>
      )
    })}
    </div>
  )
}

export default UserList