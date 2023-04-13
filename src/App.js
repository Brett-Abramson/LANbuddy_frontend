import { useState, useEffect } from "react";
import axios from "axios";
import "./style/App.css"
import Add from "./components/games/Add";
import Edit from "./components/games/Edit";
import Game from "./components/games/Game";
import AddUser from "./components/users/AddUser";
import UserList from "./components/users/UserList";
const App = () => {
  let [games, setGames] = useState([]);
  const [hideUserAdd, setHideUserAdd] = useState(false)
  const [view, setView] = useState('games')
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
        console.log(response)
      })
      getGames();
  };
  const handleUserCreate = (addUser) => {
    axios.post("http://localhost:8000/api/users", addUser).then((response) => {
      console.log(response)
      getGames()
      setHideUserAdd(!hideUserAdd)
    })
  }
  const handleDelete = (event) => {
    axios
      .delete("http://localhost:8000/api/games/" + event.target.value)
      .then((response) => {
        getGames();
      });
  };
  const handleUserDelete = (event) => {
  axios.delete("http://localhost:8000/api/users/" + event.target.value).then((response) => {
    getGames();
  })
  }
  const handleUserEdit = (user) => {
    axios.put("http://localhost:8000/api/users/" + user.id, user).then((response) =>{
    console.log(response)
    getGames();
    })
  }
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
      
      <div className="games-container">
        {games.map((game) => {
          return (
            <div className="game" key={game.id}>
              <Game 
                game={game}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
                handleUserDelete={handleUserDelete}
                setView={setView}
                getGames={getGames}
                setGames={setGames}
              />
              <UserList handleUserEdit={handleUserEdit} handleUserDelete={handleUserDelete} game={game} />
              <button onClick={() => setHideUserAdd(!hideUserAdd)}>Add User</button>
              {hideUserAdd ? 
              <AddUser handleUserCreate={handleUserCreate} game={game} />
              : null}
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default App;
