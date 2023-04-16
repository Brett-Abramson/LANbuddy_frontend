import { useState, useEffect } from "react";
import axios from "axios";
import "./style/App.css";
import Game from "./components/games/Game";
import GameDetails from "./components/games/GameDetails";
import Navbar from "./components/navigation/Navbar";
import { ThemeProvider, CssBaseline, Toolbar } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import lbpalette from "./components/themes/palette";

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
    axios
      .post("http://localhost:8000/api/games", addGame)
      .then((response) => {
        console.log(response);
        getGames();
        setView(true);
      });
  };
  const handleUserCreate = (addUser) => {
    axios
      .post("http://localhost:8000/api/users/", addUser)
      .then((response) => {
        console.log(response);
        getGames();
      });
  };
  const handleDelete = (event) => {
    axios
      .delete("http://localhost:8000/api/games/" + event.target.value)
      .then((response) => {
        getGames();
        setView(true);
      });
  };
  const handleUserDelete = (event) => {
    axios
      .delete("http://localhost:8000/api/users/" + event.target.value)
      .then((response) => {
        getGames();
      });
  };
  // const handleUserEdit = (user) => {
  //   axios
  //     .put("https://lanbuddy-api.herokuapp.com/api/users/" + user.id, user)
  //     .then((response) => {
  //       console.log(response);
  //       getGames();
  //     });
  // };
  const handleUpdate = (editGame) => {
    axios
      .put(
        "http://localhost:8000/api/games/" + editGame.id,
        editGame
      )
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
  const handleSearch = (param) => {
    axios
      .get("http://localhost:8000/api/games/", {
        params: {
          search: param,
        },
      })
      .then((response) => {
        console.log(response.data);
        setGames(response.data);
      })
      .catch((error) => {
        console.error("Error searching: ", error);
      });
  };

  useEffect(() => {
    getGames();
  }, []);

  return (
    <ThemeProvider theme={lbpalette}>
      <CssBaseline />
      <div className="main-container">
        <Navbar
          games={games}
          getGames={getGames}
          handleFilter={handleFilter}
          handleSearch={handleSearch}
          handleCreate={handleCreate}
          setView={setView}
        />
        {/* Toolbar below is to make sure nothing is hidden by the fixed Nabar */}
        <Toolbar sx={{ margin: 3 }} />

        <Grid className="games-container">
          {games.map((game, i) => {
            return (
              <div key={game.id}>
                <div className="game">
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
              </div>
            );
          })}
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default App;
