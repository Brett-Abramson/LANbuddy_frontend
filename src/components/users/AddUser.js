import { Modal, Button, Box, Grid, TextField, Paper, MenuItem } from '@mui/material'
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
    <Box m={2}>
        <Button variant='contained' size="large" onClick={toggleUserAdd}>Join community</Button>
    <Modal open={hideUserAdd}>
    <Grid container justifyContent="center">
            <Paper>
            <Box 
            mt={2}
            p={2}
            textAlign="center"
            onSubmit={handleSubmit}
            component="form" sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}>
            
    <Button variant='contained' size="large" onClick={toggleUserAdd}>Back</Button>
    <br />
                <TextField
                    variant='filled'
                    label="name"
                    type="text" 
                    name="user_name"
                    value={user.user_name}
                    onChange={handleUserChange}
                />
                <br />
                <br />
                <TextField
                    variant='filled'
                    type="text"
                    label="gamer tag"
                    name="tag"
                    value={user.tag}
                    onChange={handleUserChange}
                />
                <br />
                <br />
                {/* <label htmlFor="availability">availability: </label> */}
                <TextField 
                select 
                variant='filled'
                defaultValue="afternoon"
                label="availability"
                name ="availability" 
                onChange={handleUserChange}>
                    <MenuItem value="morning">Mornings</MenuItem>
                    <MenuItem value="afternoon">Afternoon</MenuItem>
                    <MenuItem value="evening">Evenings</MenuItem>
                    <MenuItem value="night">Night</MenuItem>
                </TextField>
                
                {/* <input
                    type="text" 
                    name="availability"
                    value={user.availability}
                    onChange={handleUserChange}
                /> */}
                <br />
                <br />
                <TextField
                    variant='filled'
                    label="time zone"
                    type="text" 
                    name="time_zone"
                    value={user.time_zone}
                    onChange={handleUserChange}
                />
                <br />
                <br />
                <TextField
                    variant='filled'
                    label="skill level"
                    type="text" 
                    name="skill_level"
                    value={user.skill_level}
                    onChange={handleUserChange}
                />
                <br />
                <Button variant='contained' type="submit">Submit</Button>
            </Box>
            </Paper>
            </Grid>
            </Modal>
            </Box>
  )
}

export default AddUser