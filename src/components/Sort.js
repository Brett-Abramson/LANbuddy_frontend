import React, { useState } from "react"


const Sort = (props) => {
    let [toggle, setToggle] = useState(false)

    const sortByName = () => {
        const sortedData =[...props.games].sort()
        toggle ? 
        props.setGames(sortedData) :
        props.setGames(sortedData.reverse())
        // console.log(sortedData)
    }
    
    return (
        <>
            <button onClick={sortByName}>Name</button>
        </>
    )
}

export default Sort