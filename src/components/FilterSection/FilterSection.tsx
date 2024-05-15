import React from "react";
import "./FilterSection.scss";
import RegionDropdown from "../RegionDropdown/RegionDropdown";
import SearchBar from "../Common/SearchBar";

type Props = {};

const FilterSection = (props: Props) => {
  return (
    <div className="filter-section-wrap">
      <SearchBar />
      <RegionDropdown />
    </div>
  );
};

export default FilterSection;
