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
      <Grid Item xs={12}>
        <h1>{props.game.name}</h1>
        </Grid>
        <Grid container display="row" xs={12}>
        <Box m={1}>
        <Button m={1} variant="contained" size="large" onClick={() => props.setView(true)}>back</Button>
        </Box>
        <Box m={1}>
        <Button variant="contained" size="large" onClick={toggleEdit}>Edit Game</Button>
        </Box>
        </Grid>
        <Grid justifyContent="center" md={7} sm={10} maxWidth="sm">
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
        <Grid Item xs={4}>
        <Paper>
        <h3>Released: <br />
        {props.game.release_date}</h3>
        <h4> Genre: <br />
        {props.game.game_genre}</h4>
        <AddUser handleUserCreate={props.handleUserCreate}game={props.game} />
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