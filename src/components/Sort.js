import React, { useState } from "react"


const Sort = (props) => {
    const [nameToggle, setNameToggle] = useState(false)
    // const [genreToggle, setGenreToggle] = useState(false)
    const [gameGenre, setGameGenre] = useState([])
    let gameGenres = []
    const data = [...props.games]
    const [filter, setFilter] = useState("")

    
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
    return (
        <>
            <button onClick={()=>props.getGames()}>Reset</button>
            <button onClick={sortByName}>Name</button>
            <button onClick={genreFilter}>Distinct Genres</button>
            {/* <button onClick={test}>Test</button> */}
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