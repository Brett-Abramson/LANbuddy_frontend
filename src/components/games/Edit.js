import React, { useState } from "react";

const Edit = (props) => {
  const [game, setGame] = useState({ ...props.game });

    const handleChange = (event) => {
        setGame({...game, [event.target.name] : event.target.value})
    }

    const handleSubmit = (event) => {
        event.prevent.default()
        props.handleUpdate(game)
    }

  return (
    <>
      <details>
        <summary>Edit Game</summary>
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
          <label htmlFor="image">IMG: </label>
          <input
            type="text"
            name="image"
            value={game.image}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="genre">Genre: </label>
          <input
            type="text"
            name="genre"
            value={game.genre}
            onChange={handleChange}
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </details>
    </>
  );
};

export default Edit;
