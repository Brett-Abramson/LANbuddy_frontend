import { Modal, Button, Box, Grid } from '@mui/material'
import React, {useState} from 'react'
const AddUser = (props) => {
let emptyUser = { user_name:"", tag:"", availability:"", time_zone:"", skill_level:"", game:props.game}
const [user, setUser] = useState(emptyUser)
const [hideUserAdd, setHideUserAdd] = useState(false)
const handleUserChange = (event) => {
        setUser({...user, [event.target.name]:event.target.value})
    }
const toggleUserAdd = () => {
  setHideUserAdd(!hideUserAdd)
}
const handleSubmit = (event) =>{
    event.preventDefault()
    props.handleUserCreate(user)
    setHideUserAdd(!hideUserAdd)
}
  return (
    <Grid container textAlign="center" justifyContent="center">
    <Box m={2}>
        <Button variant='contained' size="large" onClick={toggleUserAdd}>Add User</Button>
        </Box>
    <Modal open={hideUserAdd} close={toggleUserAdd} >
            <form onSubmit={handleSubmit}>
            
    <Button variant='contained' size="large" onClick={toggleUserAdd}>Back</Button>
    <br />
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
                {/* <label htmlFor="availability">availability: </label> */}
                <select name ="availability" onChange={handleUserChange}>
                    <option value="mornings">Mornings</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evenings</option>
                    <option value="night">Night</option>
                </select>
                
                {/* <input
                    type="text" 
                    name="availability"
                    value={user.availability}
                    onChange={handleUserChange}
                /> */}
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
            </Modal>
            </Grid>
  )
}

export default AddUser