
import { Card } from '@mui/material'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import React from 'react'

const UserList = (props) => {

  return (
    <Grid container spacing={2}>
    {props.game.players.map((player) => {
      return(
      <Grid item alignContent="center" xs={12} md={4} >
        <Paper>
            <h3>{player.name}</h3>
            <h3>{player.tag}</h3>
            <h3>{player.skill_level}</h3>
            <h5>Available: <br />
            {player.availability}</h5>
            <h5>Time zone: <br />
            {player.time_zone}</h5>
            <button value={player.id} onClick={props.handleUserDelete}>x</button>
        </Paper>
        </Grid>
      )
    })}
    </Grid>
  )
}

export default UserList