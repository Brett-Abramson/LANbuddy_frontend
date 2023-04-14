
import { Card, Button, Box, Container } from '@mui/material'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import React from 'react'

const UserList = (props) => {

  return (
    <Grid container spacing={2}>
    {props.game.players.map((player) => {
      return(
      <Grid textAlign="center" xs={12} md={4} >
      <Paper>
      <Box m={2} p={1} >
            <h3>{player.name}</h3>
            <h3>{player.tag}</h3>
            <h3>{player.skill_level}</h3>
            <h3>Available: <br />
            {player.availability}</h3>
            <h3>Time zone: <br />
            {player.time_zone}</h3>
            <Button variant="contained" value={player.id} onClick={props.handleUserDelete}>x</Button>
            </Box>
            </Paper>
        </Grid>
      )
    })}
    </Grid>
  )
}

export default UserList