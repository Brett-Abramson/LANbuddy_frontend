import { useState } from "react"
import React from 'react'
import UserList from "../users/UserList"
import AddUser from "../users/AddUser"
import Edit from "./Edit"
import Grid from '@mui/material/Grid'
import { Box, Button, Paper, Container } from "@mui/material"

const GameDetails = (props) => {

  const [edit, setEdit] = useState(false);

  const toggleEdit = () => {
    setEdit(!edit);
  };
  return (
    <Grid container alignItems="center" className="detail-page">
      <Grid item xs={12}>
        <h1>{props.game.name}</h1>
        </Grid>
        <Grid item container display="row" xs={12}>
        <Box m={1}>
        <Button m={1} variant="contained" size="medium" onClick={() => props.setView(true)}>back</Button>
        </Box>
        <Box m={1}>
        <Button variant="contained" size="medium" onClick={toggleEdit}>Edit Game</Button>
        </Box>
        </Grid>
        <Grid container justifyContent="center" md={6} xs={12} maxWidth="sm">
        <Box>
        <img src={props.game.img} alt="" />      
        </Box>
        </Grid>
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
        <Grid item md={4} xs={12}>
        <Paper>
        <Box p={3}>
        <h2>Released: <br />
        {props.game.release_date}</h2>
        <h2> Genre: <br />
        {props.game.game_genre}</h2>
        <AddUser handleUserCreate={props.handleUserCreate} game={props.game} />
        </Box>
        </Paper>
        </Grid>
        </>
        }
        <UserList 
        game={props.game}
        handleUserEdit={props.handleUserEdit}
        handleUserDelete={props.handleUserDelete}  />
    </Grid>
  )
}

export default GameDetails