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
import "./RegionDropdown.scss";
import expandLight from "../../assets/icons/ExpandLight.svg";
import expandDark from "../../assets/icons/ExpandDark.svg";
import Image from "../Common/Image";

type Props = {};

const RegionDropdown = (props: Props) => {
  const { region, setRegion } = useContext(FilterContext);

  const handleChange = (event: SelectChangeEvent) => {
    setRegion(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 250 }}>
      <FormControl fullWidth className="dropdown-wrap">
        <InputLabel id="dropdown-label" className="dropdown-label">
          Filter By Region
        </InputLabel>
        <Select
          labelId="region-dropdown"
          id="region-dropdown"
          value={region}
          className="region-dropdown"
          label="Filter by Region"
          onChange={handleChange}
          IconComponent={() => (
            <Image
              darkThemeSrc={expandDark}
              lightThemeSrc={expandLight}
              alt="expand-icon"
              customClass="expand-icon"
            />
          )}
        >
          <div className="expanded-wrap">
            {regionOptions.map((region: ILableValue) => (
              <MenuItem value={region.value}>{region.label}</MenuItem>
            ))}
          </div>
        </Select>
      </FormControl>
    </Box>
  );
};

export default RegionDropdown;
