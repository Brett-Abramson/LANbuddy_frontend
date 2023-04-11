import { useState, useEffect } from "react";
import axios from "axios";
import Add from "./components/games/Add"
import Edit from "./components/games/Edit"

const App = () => {
  let [games, setGames] = useState([]);

  const getGames = () => {
    axios
      .get("http://localhost:8000/api/games")
      .then(
        (response) => setGames(response.data),
        (err) => console.log(err)
      )
      .catch((error) => console.error(error));
  };
  const handleCreate = (addGame) => {
    axios
      .post("http://localhost:8000/api/games", addGame)
      .then((response) => {
        console.log(response)
        getGames()
      })
  }
  const handleDelete = (event) => {
    axios
      .delete("htt[://localhost:8000/api/games/" + event.target.value)
      .then((response) => {
        getGames()
      })
  }
  const handleUpdate = (editGame) => {
    axios
      .put("http://localhost:8000/api/games/" + editGame.id, editGame)
      .then((response) => {
        getGames()
      })  
  }

  useEffect(() => {
    getGames();
  }, []);

  return (
    <>
      <h1>LAN Buddy</h1>
      <Add handleCreate={handleCreate} />
      {games.map((game) => {
        return (
          <div className="game" key={game.id}>
            <h3>{game.name}</h3>

            {/* probably move this to it's own component */}
            <Edit handleUpdate={handleUpdate} game={game}/>
            <button onClick={handleDelete} value={game.id}>Delete</button>
          </div>
        );
      })}
    </>
  );
};

export default App;
