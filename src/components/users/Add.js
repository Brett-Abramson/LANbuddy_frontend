import React, { useState, useEffect } from " react"

const AddUser = (props) => {
    let emptyUser = {name: "", tag: "", availability: "", time_zone: "", skill_level: ""}
    const [user,setUser] = useState(emptyUser)

    const handleChange = (event) => {
        setUser({...user, [event.target.name] : event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(user)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input 
                    type="text"
                    name="name"
                    value={user.name}
                    onChance={handleChange}
                />
                <br />
                <br />
                <label htmlFor="tag">Tag: </label>
                <input 
                    type="text"
                    name="tag"
                    value={user.tag}
                    onChance={handleChange}
                />
                <br />
                <br />
                <label htmlFor="availability">Availability: </label>
                <input 
                    type="text"
                    name="availability"
                    value={user.availability}
                    onChance={handleChange}
                />
                <br />
                <br />
                <label htmlFor="time_zone">Time Zone: </label>
                <input 
                    type="text"
                    name="time_zone"
                    value={user.time_zone}
                    onChance={handleChange}
                />
                <br />
                <br />
                <label htmlFor="skill_level">Skill Level: </label>
                <input 
                    type="text"
                    name="skill_level"
                    value={user.skill_level}
                    onChance={handleChange}
                />
                <br />
                <br />
            </form>
        </>
    )
}

export default AddUser