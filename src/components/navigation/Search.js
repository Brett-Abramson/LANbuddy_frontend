import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button"
import SearchIcon from '@mui/icons-material/Search';
import Input from "@mui/material/Input"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"

const Search = (props) => {
  // const [search, setSearch] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null)

  const searchFor = (value) => {
    // event.preventDefault();
    clearTimeout(searchTimeout)
    const timeout = setTimeout(() => {
      props.handleSearch(value);
    }, 300)
    setSearchTimeout(timeout)
  };
  const handleSearch = (event) => {
    // bypassing State has cancelled the keystroke lag
    const targetValue = event.target.value
    // setSearch(targetValue);
    searchFor(targetValue)
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
