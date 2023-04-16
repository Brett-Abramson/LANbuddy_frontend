import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button"
import SearchIcon from '@mui/icons-material/Search';
import Input from "@mui/material/Input"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"

const Search = (props) => {
  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
    searchFor(event)
  };
  const searchFor = (event) => {
    event.preventDefault();
    props.handleSearch(search);
  };


  return (
    <>
      <Stack direction="row" spacing={2}>
        <form onSubmit={searchFor}>
          <Input 
            color="secondary"
            type="text" 
            label="Search by Name or Genre"
            placeholder="I am looking for..."

            onChange={handleSearch} />
          <Button variant="contained" color="secondary">
            <SearchIcon />  
          </Button>
        </form>
      </Stack>
    </>
  );
};

export default Search;
