import React, {useState} from 'react'

const AddUser = (props) => {
let emptyUser = { user_name:"", tag:"", availability:"", time_zone:"", skill_level:"", game:props.game}
const [user, setUser] = useState(emptyUser)
const handleUserChange = (event) => {
        setUser({...user, [event.target.name]:event.target.value})
    }
const handleSubmit = (event) =>{
    event.preventDefault()
    props.handleUserCreate(user)
    props.setHideUserAdd(!props.hideUserAdd)
}
  return (
    <div>
            <form onSubmit={handleSubmit}>
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
                    value={user.skill_level}
                    onChange={handleUserChange}
                />
                <button type="submit">Submit</button>
            </form>
            </div>
  )
}

export default AddUser