import { useState, useEffect } from "react"


const NewAdd = (props) => {

    
    let emptyUser = { user_name:"", tag:"", availability:"", time_zone:"", skill_level:""}
    const [user, setUser] = useState(emptyUser)
    let emptyGame = { name: "", release_date: "", img: "", game_genre: ""}
    const [game, setGame] = useState(emptyGame)
    //uses game form items to add data to game fields
    const handleGameChange = (event) => {
        setGame({...game, [event.target.name] : event.target.value})
    }
    //uses user form items to add user data to user fields
    const handleUserChange = (event) => {
        setUser({...user, [event.target.name]:event.target.value})
    }
    //nest user and game data
    const handleCombine = (event) => {
    //add game to game field in user object
       let newUser = {...user, game:game.id}
      setUser(newUser)
    //add user to players field in game object
       let newGame = {...game, players:user.id}
      setGame(newGame)
      handleSubmit(event)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(game)
    }

    return (
        <div className="addGame-form-container">
        <h3>Game</h3>
            <form onSubmit={handleCombine}>
                <label htmlFor="name">Name: </label>
                <input
                    type="text" 
                    name="name"
                    value={game.name}
                    onChange={handleGameChange}
                />
                <br />
                <br />
                <label htmlFor="release_date">Release Date: </label>
                <input
                    type="text" 
                    name="release_date"
                    value={game.release_date}
                    onChange={handleGameChange}
                />
                <br />
                <br />
                <label htmlFor="img">IMG: </label>
                <input
                    type="text" 
                    name="img"
                    value={game.img}
                    onChange={handleGameChange}
                />
                <br />
                <br />
                <label htmlFor="game_genre">Genre: </label>
                <input
                    type="text" 
                    name="game_genre"
                    value={game.game_genre}
                    onChange={handleGameChange}
                />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
            
            <h3>user</h3>
            <form>
                <label htmlFor="user_name">Name: </label>
                <input
                    type="text" 
                    name="user_name"
                    value={user.user_name}
                    onChange={handleUserChange}
                />
                <br />
                <br />
                <label htmlFor="tag">tag: </label>
                <input
                    type="text" 
                    name="tag"
                    value={user.tag}
                    onChange={handleUserChange}
                />
                <br />
                <br />
                <label htmlFor="availability">availability: </label>
                <input
                    type="text" 
                    name="availability"
                    value={user.availability}
                    onChange={handleUserChange}
                />
                <br />
                <br />
                <label htmlFor="time_zone">time zone: </label>
                <input
                    type="text" 
                    name="time_zone"
                    value={user.time_zone}
                    onChange={handleUserChange}
                />
                <br />
                <br />
                <label htmlFor="skill_level">skill level:</label>
                <input
                    type="text" 
                    name="skill_level"
                    onChange={handleUserChange}
                />
            </form>
        </div>
    )
}

export default NewAdd