import React, { useState } from "react";
import Search from "./Search";
import Add from "../games/Add";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

const Navbar = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar disableGutters={false}>
          <Grid container spacing={6} sx={{ flexGrow: 1 }}>
            <Grid xs>
              <Box
                component="img"
                sx={{ width: 250, height: 75 }}
                alt="Logo"
                src={process.env.PUBLIC_URL + "/LANBuddyLogo.jpg"}
              />
            </Grid>
            <Grid xs={6}>
              <Box sx={{ alignContent:"auto"}}>
                <Add
                  handleCreate={props.handleCreate}
                  setView={props.setView}
                />
              </Box>
            </Grid>
            <Grid xs mdOffset="auto">
              <Box sx={{ marginRight: 2 }}>
                <Search
                  games={props.games}
                  getGames={props.getGames}
                  handleFilter={props.handleFilter}
                  handleSearch={props.handleSearch}
                />
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
