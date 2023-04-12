import { useState, useEffect } from "react";
import axios from "axios";
import "./style/App.css"
import Add from "./components/games/Add";
import Edit from "./components/games/Edit";
import Game from "./components/games/Game";

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
    axios.post("http://localhost:8000/api/games", addGame).then((response) => {
      console.log(response);
      getGames();
    });
  };
  const handleDelete = (event) => {
    axios
      .delete("htt[://localhost:8000/api/games/" + event.target.value)
      .then((response) => {
        getGames();
      });
  };
  // move this request inside the Edit component
  const handleUpdate = (editGame) => {
    axios
      .put("http://localhost:8000/api/games/" + editGame.id, editGame)
      .then((response) => {
        getGames();
      });
  };

  useEffect(() => {
    getGames();
  }, []);

  return (
    <main>
      <h1>LAN Buddy</h1>
      {/* navbar sorting by genres? or most recently added games? */}
      {/* <Add handleCreate={handleCreate} /> */}
      <div className="games-container">
        {games.map((game) => {
          return (
            <div className="game" key={game.id}>
              <Game 
                game={game}
                handleDelete={handleDelete}
                getGames={getGames}
                setGames={setGames}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default App;
