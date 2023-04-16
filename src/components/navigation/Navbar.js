import React, { useState } from "react";
import Search from "./Search";
import Add from "../games/Add";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Navbar = (props) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar>
          <Toolbar
            disableGutters={true}
            sx={{ justifyContent: "space-between" }}
          >
            <Box
              component="img"
              sx={{ width: 250, height: 100 }}
              alt="Logo"
              src={process.env.PUBLIC_URL + "/LANBuddyLogo.jpg"}
            ></Box>
            <Search
              games={props.games}
              getGames={props.getGames}
              handleFilter={props.handleFilter}
              handleSearch={props.handleSearch}
            />
            {/* <Add handleCreate={props.handleCreate} setView={props.setView} /> */}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
