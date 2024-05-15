import "./App.scss";
import React, { useContext } from "react";
import Header from "./components/Header/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  fetchAllCountries,
  fetchCountriesByName,
  fetchCountriesByRegion,
} from "./services/countries.services";
import { useCallback, useEffect, useState } from "react";
import { CircularProgress, Box } from "@mui/material";
import { ICountryData } from "./types";
import Countries from "./components/Countries/Countries";
import FilterSection from "./components/FilterSection/FilterSection";
import { SelectChangeEvent } from "@mui/material";
import FilterContext, { FilterContextProvider } from "./context/FilterContext";
import { FETCH_COUNTRIES_TYPE, regionOptions } from "./constants";
import { fetchCountryType } from "./types";
import _ from "lodash";
import { Routes, Route } from "react-router-dom";
import CountryInsights from "./components/Countries/CountryInsights";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#ffffff", // Change primary color
//     },
//     secondary: {
//       main: "#f50057", // Change secondary color
//     },
//     // You can also customize other colors like error, warning, info, etc.
//   },
// });

function App() {
  const [countries, setCountries] = useState<ICountryData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { region, country } = useContext(FilterContext);
  const [firstLoad, setFirstLoad] = useState<boolean>(true);

  const fetchCounties = async (fetchType: fetchCountryType) => {
    try {
      setIsLoading(true);
      let countries = [];
      switch (fetchType) {
        case FETCH_COUNTRIES_TYPE.REGION: {
          countries = await fetchCountriesByRegion(region);
          break;
        }
        case FETCH_COUNTRIES_TYPE.COUNTRY: {
          countries = await fetchCountriesByName(country);
          break;
        }
        default: {
          countries = await fetchAllCountries();
        }
      }
      setCountries(countries);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.error(err);
    }
  };
  useEffect(() => {
    fetchCounties(FETCH_COUNTRIES_TYPE.ALL);
    setFirstLoad(false);
  }, []);

  useEffect(() => {
    if (firstLoad) return;
    if (_.isEmpty(region)) {
      fetchCounties(FETCH_COUNTRIES_TYPE.ALL);
      return;
    }
    fetchCounties(FETCH_COUNTRIES_TYPE.REGION);
  }, [region]);

  useEffect(() => {
    if (firstLoad) return;
    if (_.isEmpty(country)) {
      fetchCounties(FETCH_COUNTRIES_TYPE.ALL);
      return;
    }
    fetchCounties(FETCH_COUNTRIES_TYPE.COUNTRY);
  }, [country]);

  return (
    // <ThemeProvider theme={theme}>
    <div className="App nunito-sans-font">
      <Header />
      <FilterSection />
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "20vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress color="info" />
        </Box>
      ) : (
        <Countries countries={countries} />
      )}
    </div>
    // </ThemeProvider>
  );
}

export default App;
