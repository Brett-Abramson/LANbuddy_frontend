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
            <h3>{player.name}</h3>
            <h3>{player.tag}</h3>
            <h3>{player.skill_level}</h3>
            <h5>Available: <br />
            {player.availability}</h5>
            <h5>Time zone: <br />
            {player.time_zone}</h5>
            <button value={player.id} onClick={props.handleUserDelete}>x</button>
        </div>
      )
    })}
    </div>
  )
}

export default UserList