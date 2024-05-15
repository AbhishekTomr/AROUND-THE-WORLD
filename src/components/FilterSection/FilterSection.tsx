import React from "react";
import "./FilterSection.scss";
import RegionDropdown from "../RegionDropdown/RegionDropdown";

type Props = {};

const FilterSection = (props: Props) => {
  return (
    <div className="filter-section-wrap">
      <div className="search-bar-wrap">Search Bar</div>
      <RegionDropdown />
    </div>
  );
};

export default FilterSection;
