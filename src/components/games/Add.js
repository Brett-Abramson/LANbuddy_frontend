import { useState } from "react"
import { Box, Button, Grid, Modal, Paper, TextField } from "@mui/material"

const Add = (props) => {
    const [showAdd, setShowAdd] = useState(false)
    let emptyGame = { name: "", release_date: "", image: "", game_genre: ""}
    const [game, setGame] = useState(emptyGame)

    const handleChange = (event) => {
        setGame({...game, [event.target.name] : event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setShowAdd(!showAdd)
        props.handleCreate(game)
        props.setView(true)
    }
    
    return (
        <div className="addGame-form-container">
        <Button
        variant="contained"
        onClick={() => setShowAdd(!showAdd)}>Add Game</Button>
            {showAdd ?
            <Modal open={showAdd} onClose={() => setShowAdd(!showAdd)}>
            <Box mt={3} p={3}>
            <Grid container justifyContent="center">
            <Paper>
            <Box
            p={3}
            component="form"
            onSubmit={handleSubmit}>
            <Button onClick={() => setShowAdd(!showAdd)}>close</Button>
            <br />
                <TextField 
                    variant="filled"
                    label="Name"
                    type="text" 
                    name="name"
                    value={game.name}
                    onChange={handleChange}
                />
                <br />
                <br />
                <TextField
                    variant="filled"
                    label="Release Date"
                    type="text" 
                    name="release_date"
                    value={game.release_date}
                    onChange={handleChange}
                />
                <br />
                <br />
                <TextField
                    variant="filled"
                    label="Image URL"
                    type="text" 
                    name="img"
                    value={game.img}
                    onChange={handleChange}
                />
                <br />
                <br />
                <TextField
                    variant="filled"
                    label="Genre"
                    type="text" 
                    name="game_genre"
                    value={game.game_genre}
                    onChange={handleChange}
                />
                <br />
                <br />
                <Button
                variant="contained"
                type="submit">Submit</Button>
            </Box>
            </Paper>
            </Grid>
            </Box>
            </Modal>
            : null}
        </div>
    )
}

export default Add