import { useState } from "react"
import { Box, Modal } from "@mui/material"

const Add = (props) => {
    const [showAdd, setShowAdd] = useState(false)
    let emptyGame = { name: "", release_date: "", image: "", game_genre: ""}
    const [game, setGame] = useState(emptyGame)

    const handleChange = (event) => {
        setGame({...game, [event.target.name] : event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setShowAdd(!showAdd)
        props.handleCreate(game)
        props.setView(true)
    }
    
    return (
        <div className="addGame-form-container">
        <button onClick={() => setShowAdd(!showAdd)}>Add Game</button>
            {showAdd ?
            <Modal open={showAdd} onClose={() => setShowAdd(!showAdd)}>
            <Box>
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
            </Box>
            </Modal>
            : null}
        </div>
    )
}

export default Add