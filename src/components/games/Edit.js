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
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={game.name}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="release_date">Release Date: </label>
          <input
            type="text"
            name="release_date"
            value={game.release_date}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="img">IMG: </label>
          <input
            type="text"
            name="img"
            value={game.img}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="game_genre">Genre: </label>
          <input
            type="text"
            name="game_genre"
            value={game.game_genre}
            onChange={handleChange}
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      <button value={props.game.id} onClick={props.handleDelete}>x</button>
    </>
  );
};

export default Edit;
