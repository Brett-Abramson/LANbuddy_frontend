import React, { useState } from "react"


const Sort = (props) => {
    // ===  used by search    ===
    const [search, setSearch] = useState("")
    const handleSearch = (event) => {setSearch(event.target.value)}
    // const [data,setData] = useState({...props.games})
    // this function currently just reverses the order they are rendered, nothing specific to name...

    // populate an array with the current genres
    let genres = []
    const populateGenres = () => {
        props.games.forEach((game)=>{genres.push(game.game_genre)})
    }
    //take each element of the array, if it matches any other elements remove it.
    let uniqueGenres = genres.filter((value, index, array) => array.indexOf(value) === index)
    
    
    const filterBy = (event) => {
        props.handleFilter(event)
    }
    const searchFor = (event) => {
        event.preventDefault()
        props.handleSearch(search)
    }

    const test = () => {
        // populateGenres()
        console.log(uniqueGenres)
    }
    return (
        <>
            <button onClick={test}>Test</button>
            <button onClick={()=>props.getGames()}>Reset</button>
            <div className="select-genre">
                <form onChange={filterBy}>
                    <label htmlFor="genre-select">Filter by Genre</label>
                    <select name="genre-select">
                        <option value="">All</option>
                        <option value="FPS">FPS</option>
                        <option value="MMO">MMO</option>
                        <option value="MOBA">MOBA</option>
                        <option value="Sports">Sports</option>
                        <option value="Strategy">Strategy</option>
                    </select>
                </form>
            </div>
            <div className="searchbar">
                <form onSubmit={searchFor}>
                    <input type="text" onChange={handleSearch} />
                    <button>Search</button>
                </form>
            </div>
        </>
    )
}

export default Sort