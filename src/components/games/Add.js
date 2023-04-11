import { useState, useEffect } from "react"


const Add = (props) => {

    let emptyGame = { name: "", release_date: "", image: "", game_genre: ""}
    const [game, setGame] = useState(emptyGame)

    const handleChange = (event) => {
        event.preventDefault()
        props.handleCreate(game)
    }

    return (
        <>
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
        </>
    )
}

export default Add