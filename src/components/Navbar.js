import React, { useState } from "react"
import Sort from "./games/Sort"
import Add from "./games/Add"

const Navbar = (props) => {


    return (
        <>
            <Sort
                games={props.games}
                getGames={props.getGames}
                handleFilter={props.handleFilter}
                handleSearch={props.handleSearch}
            />
            <Add handleCreate={props.handleCreate} />
        </>
    )
}

export default Navbar