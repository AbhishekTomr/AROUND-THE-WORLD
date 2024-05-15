import React, { ChangeEvent } from "react";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import SearchIcon from "../../assets/icons/SearchLight.svg";
import "./SearchBar.scss";
import { useContext } from "react";
import FilterContext from "../../context/FilterContext";

type Props = {};

const SearchBar = (props: Props) => {
  const { country, setCountry } = useContext(FilterContext);
  let counter: any = null;

  const searchCountry = (searchTerm: string) => {
    if (counter) clearTimeout(counter);
    counter = setTimeout(() => {
      setCountry(searchTerm);
    }, 300);
  };
  return (
    <TextField
      id="outlined-basic"
      placeholder="Search for a country…"
      variant="outlined"
      className="search-bar"
      onChange={(event: any) => {
        searchCountry(event.target.value);
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <img src={SearchIcon} alt="Search Icon" />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
