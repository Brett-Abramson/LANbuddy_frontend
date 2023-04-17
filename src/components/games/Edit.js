import { Box, Paper, TextField, Button } from "@mui/material";
import React, { useState } from "react";

const Edit = (props) => {
  const [game, setGame] = useState(props.game);

    const handleChange = (event) => {
        setGame({...game, [event.target.name] : event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleUpdate(game)
        props.toggleEdit()
    }

  return (
    <>
      <Paper>
      <Box p={5}>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="filled"
            label="name"
            type="text"
            name="name"
            value={game.name}
            onChange={handleChange}
          />
          <br />
          <br />
          <TextField
            label="release date"
            variant="filled"
            type="text"
            name="release_date"
            value={game.release_date}
            onChange={handleChange}
          />
          <br />
          <br />
          <TextField
            label="image url"
            variant="filled"
            type="text"
            name="img"
            value={game.img}
            onChange={handleChange}
          />
          <br />
          <br />
          <TextField
            variant="filled"
            label="genre"
            type="text"
            name="game_genre"
            value={game.game_genre}
            onChange={handleChange}
          />
          <br />
          <br />
          <Button variant="contained" type="submit">Submit</Button><Button 
        variant="contained"
        value={props.game.id} 
        onClick={props.handleDelete}>
        delete</Button>
        </form>
      
      </Box>
      </Paper>
    </>
  );
};

export default Edit;
