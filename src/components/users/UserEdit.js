import React, {useState} from 'react'

const UserEdit = (props) => {
const [showEdit, setShowEdit] = useState(false)
const [user, setUser] = useState(props.player)
const handleUserChange = (event) => {
        setUser({...user, [event.target.name]:event.target.value})
    }
const handleSubmit = (event) =>{
    event.preventDefault()
    props.handleUserEdit(user)
    setShowEdit(!showEdit)
}
  return (
    <div>
        <button onClick={() => setShowEdit(!showEdit)}>edit player</button>
                {showEdit ? 
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
                : null}
            </div>
  )
}
export default UserEdit