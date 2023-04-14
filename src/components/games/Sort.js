import React, { useState } from "react"


const Sort = (props) => {
    // const [nameToggle, setNameToggle] = useState(false)
    const [genres, setGenres] = useState(false)
    const [gameGenre, setGameGenre] = useState([])
    let gameGenres = []
    const data = [...props.games]
    // ===  used by the genre search    ===
    const [genreSearch, setGenreSearch] = useState("")
    const [nameSearch, setNameSearch] = useState("")
    const genreToggle = () => setGenres(!genres)
    
    const handleGenreSearch = (event) => {
        setGenreSearch(event.target.value)
    }
    const handleNameSearch = (event) => {
        setNameSearch(event.target.value)
    }
    
    // this function currently just reverses the order they are rendered, nothing specific to name...
    const sortByName = () => {
        const sortedData = data.sort()
        // nameToggle ? 
        // props.setGames(sortedData) :
        props.setGames(sortedData.reverse())
    }
    const searchByName = (event) => {
        event.preventDefault()
        const filterByName = (item) => {
            if (item.name.toLowerCase() === nameSearch.toLowerCase()) {return true}
        }
        props.setGames(data.filter(filterByName))
    }
    const searchGenre = (event) => {
        event.preventDefault()
        // checks to see if genre matches with what user writes
        const filterByGenre = (item) => {
            if (item.game_genre.toLowerCase() === genreSearch.toLowerCase()){return true}      
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
            {/* OR button display to pick genres? */}
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
             {/* OR dropdown menu to display different genres? */}
            <div className="select-genre">
                <form onChange={filterBy}>
                    <label htmlFor="genre-select">Filter by Genre</label>
                    <select name="genre-select">
                        <option value="">All</option>
                        <option value="FPS">FPS</option>
                        <option value="Strategy">Strategy</option>
                        <option value="MMO">MMO</option>
                        <option value="Sports">Sports</option>
                    </select>
                </form>
            </div>
                

                    {/* OR search to display different genres? --this way currently only utilizes the frontend-- */}
            <div className="searchGenre-input">
                <form onSubmit={searchGenre}>
                <input type="text" onChange={handleGenreSearch} />
                <button>Search By Genre</button>
                </form>
            </div>
            <div className="searchName-input">
                <form onSubmit={searchByName}>
                    <input type="text" onChange={handleNameSearch} />
                    <button>Search By Name</button>
                </form>
            </div>
        </>
    )
}

export default Sort