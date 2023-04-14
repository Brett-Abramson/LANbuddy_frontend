import { useState } from "react"
import React from 'react'
import UserList from "../users/UserList"
import AddUser from "../users/AddUser"
import Edit from "./Edit"
import Grid from '@mui/material/Grid'
import { Button } from "@mui/material"

const GameDetails = (props) => {

  const [edit, setEdit] = useState(false);

  const toggleEdit = () => {
    setEdit(!edit);
  };
  const [hideUserAdd, setHideUserAdd] = useState(false)
  return (
    <Grid justifyContent="center" alignItems="center" className="detail-page">
        <h1>{props.game.name}</h1>
        <Button onClick={() => props.setView(true)}>back</Button>
        <img src={props.game.img} alt="" />        
        <Button onClick={toggleEdit}>Edit Game</Button>
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
        <h5>{props.game.release_date}</h5>
        <h5>{props.game.game_genre}</h5>
        </>
        }
        <Button onClick={() => setHideUserAdd(!hideUserAdd)}>Add User</Button>
              {hideUserAdd ? 
              <AddUser handleUserCreate={props.handleUserCreate} hideUserAdd={hideUserAdd} setHideUserAdd={setHideUserAdd} game={props.game} />
              : null}
        <UserList 
        game={props.game}
        handleUserEdit={props.handleUserEdit}
        handleUserDelete={props.handleUserDelete}  />
    </Grid>
  )
}

export default GameDetails