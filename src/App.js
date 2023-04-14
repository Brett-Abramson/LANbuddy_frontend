import { useState, useEffect } from "react";
import axios from "axios";
import "./style/App.css";
import Add from "./components/games/Add";
import Game from "./components/games/Game";
import GameDetails from "./components/games/GameDetails";
import Sort from "./components/games/Sort";
const App = () => {
  const [games, setGames] = useState([]);
  const [view, setView] = useState(true);

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
    axios.post("http://localhost:8000/api/games/", addGame).then((response) => {
      console.log(response);
      getGames();
      setView(true);
    });
  };
  const handleUserCreate = (addUser) => {
    axios.post("http://localhost:8000/api/users/", addUser).then((response) => {
      console.log(response);
      getGames();
    });
  };
  const handleDelete = (event) => {
    axios
      .delete("http://localhost:8000/api/games/" + event.target.value)
      .then((response) => {
        getGames();
        setView(true)
      });
  };
  const handleUserDelete = (event) => {

    axios
      .delete("http://localhost:8000/api/users/" + event.target.value)
      .then((response) => {
        getGames();
      });
  };
  const handleUserEdit = (user) => {
    axios
      .put("http://localhost:8000/api/users/" + user.id, user)
      .then((response) => {
        console.log(response);
        getGames();
      });
  };
  const handleUpdate = (editGame) => {
    axios
      .put("http://localhost:8000/api/games/" + editGame.id, editGame)
      .then((response) => {
        getGames();
      });
  };
  const handleFilter = (event) => {
    axios
      .get("http://localhost:8000/api/games/", {
        params: {
          game_genre: event.target.value,
        },
      })
      .then((response) => {
        console.log(response.data);
        setGames(response.data);
      })
      .catch((error) => {
        console.error("Error fechting filtered data:", error);
      });
  };

  useEffect(() => {
    getGames();
  }, []);

  return (
    <div className="main-container">
      <h1>LAN Buddy</h1>

      <Sort
        games={games}
        getGames={getGames}
        setGames={setGames}
        handleFilter={handleFilter}
      />
      <Add handleCreate={handleCreate} />
      <div className="games-container">
        {games.map((game, i) => {
          return (
            <>
              <div className="game" key={game.id}>
                {view === true ? (
                  <Game
                    game={game}
                    handleUserDelete={handleUserDelete}
                    setView={setView}
                    getGames={getGames}
                    setGames={setGames}
                  />
                ) : null}
              </div>
              <div>
                {view === game.id ? (
                  <>
                    <GameDetails
                      game={games[i]}
                      setView={setView}
                      handleUserCreate={handleUserCreate}
                      handleUserDelete={handleUserDelete}
                      handleUpdate={handleUpdate}
                      handleDelete={handleDelete}
                    />
                  </>
                ) : null}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default App;
