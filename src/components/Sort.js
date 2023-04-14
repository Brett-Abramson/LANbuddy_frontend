import React, { useState } from "react"


const Sort = (props) => {
    // const [nameToggle, setNameToggle] = useState(false)
    const [genres, setGenres] = useState(false)
    const [gameGenre, setGameGenre] = useState([])
    let gameGenres = []
    const data = [...props.games]
    // used by the genre search
    const [filter, setFilter] = useState("")

    const genreToggle = () => setGenres(!genres)
    
    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }
    
    // this function currently just reverses the order they are rendered, nothing specific to name...
    const sortByName = () => {
        const sortedData = data.sort()
        // nameToggle ? 
        // props.setGames(sortedData) :
        props.setGames(sortedData.reverse())
    }
    const genreFilter = (event) => {
        event.preventDefault()
        // checks to see if genre matches with what is written
        const filterByGenre = (item) => {
            if (item.game_genre.toLowerCase() === filter.toLowerCase()){return true}      
        }
        // runs through the array filtering what doesn't pass our comparison function
        props.setGames(data.filter(filterByGenre))
    }
    // const test = () => console.log(data.filter(filterByGenre))
    const filterBy = (event) => {
        props.handleFilter(event)
        // console.log(event)
    }
    return (
        <>
            <button onClick={()=>props.getGames()}>Reset</button>
            <button onClick={sortByName}>Name</button>
            {/* button display to pick genres? */}
            <button onClick={genreToggle}>Genres</button>
            {genres ?
                <div className="filter-btns">
                <button onClick={filterBy} value="FPS">FPS</button>
                <button onClick={filterBy} value="Strategy">Strategy</button>
                <button onClick={filterBy} value="MMO">MMO</button>
                <button onClick={filterBy} value="Sports">Sports</button>
                </div>
                :
                null}      
             {/* dropdown menu to display different genres? */}
            <div className="select-genre">
                <form onChange={filterBy}>
                    <select name="genreSelect">
                        <option value="">Filter by Genre</option>
                        <option value="FPS">FPS</option>
                        <option value="Strategy">Strategy</option>
                        <option value="MMO">MMO</option>
                        <option value="Sports">Sports</option>
                    </select>
                </form>
            </div>
                

                    {/* search to display different genres? --this way currently only utilizes the frontend-- */}
            <div className="genreFilter-input">
                <form onSubmit={genreFilter}>
                <input type="text" onChange={handleFilterChange}></input>
                <button>Search By Genre</button>
                </form>
            </div>
        </>
    )
}

export default Sort