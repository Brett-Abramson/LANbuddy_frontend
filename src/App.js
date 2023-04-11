import { useState, useEffect } from "react";
import axios from "axios";

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
          </div>
        );
      })}
    </>
  );
};

export default App;
