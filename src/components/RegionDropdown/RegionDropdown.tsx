import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { regionOptions } from "../../constants";
import { ILableValue } from "../../types";
import { useContext } from "react";
import FilterContext from "../../context/FilterContext";

type Props = {};

const RegionDropdown = (props: Props) => {
  const { region, setRegion } = useContext(FilterContext);

  const handleChange = (event: SelectChangeEvent) => {
    setRegion(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 250 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter By Region</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="region-dropdown"
          value={region}
          label="Filter by Region"
          onChange={handleChange}
        >
          {regionOptions.map((region: ILableValue) => (
            <MenuItem value={region.value}>{region.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default RegionDropdown;
