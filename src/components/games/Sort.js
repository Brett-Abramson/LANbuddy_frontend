import React, { useState, useEffect } from "react";
import axios from "axios";

const Sort = (props) => {
  // ===  used by search    ===
  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const [genres, setGenres] = useState([]);


  const populateGenres = () => {
    let getGenres = [...props.games.map((game) => game.game_genre)]
    setGenres([...new Set(getGenres)]);
  }
  const filterBy = (event) => {
    props.handleFilter(event);
  };
  const searchFor = (event) => {
    event.preventDefault();
    props.handleSearch(search);
  };

  useEffect(() => {
    populateGenres()
    //useEffect will run if anything changes with what is between the brackets
  },[props.games]);

  const test = () => {
    console.log([...new Set(genres)])
  };
  return (
    <>
      <button onClick={test}>Test</button>
      <button onClick={() => props.getGames()}>Reset</button>
      <div className="select-genre">
        <form onChange={filterBy}>
          <label htmlFor="genre-select">Filter by Genre</label>
          <select name="genre-select">
            <option value="">All</option>
            <option value="FPS">FPS</option>
            <option value="MMO">MMO</option>
            <option value="MOBA">MOBA</option>
            <option value="Sports">Sports</option>
            <option value="Strategy">Strategy</option>
          </select>
        </form>
      </div>
      <div className="searchbar">
        <form onSubmit={searchFor}>
          <input type="text" onChange={handleSearch} />
          <button>Search</button>
        </form>
      </div>
    </>
  );
};

export default Sort;
