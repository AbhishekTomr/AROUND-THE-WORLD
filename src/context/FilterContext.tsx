import _ from "lodash";
import React, { useState, createContext, useEffect } from "react";
import { regionOptions } from "../constants";

const initialState = {
  region: "",
  country: "",
  setRegion: _.noop,
  setCountry: _.noop,
};

const FilterContext = createContext(initialState);

export default FilterContext;

interface IFilterContext {
  children: React.ReactElement;
}

export const FilterContextProvider = (props: IFilterContext): any => {
  const { children } = props;
  const [region, setRegion] = useState<string>(initialState.region);
  const [country, setCountry] = useState<string>("");

  return (
    <FilterContext.Provider
      value={{
        region,
        setRegion,
        country,
        setCountry,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
