import "./App.scss";
import React, { useContext } from "react";
import Header from "./components/Header/Header";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
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
import { APP_THEME, FETCH_COUNTRIES_TYPE, regionOptions } from "./constants";
import { fetchCountryType } from "./types";
import _ from "lodash";
import { Routes, Route } from "react-router-dom";
import CountryInsights from "./components/Countries/CountryInsights";
import { themeContext } from "./context/ThemeContext";

function App() {
  const [countries, setCountries] = useState<ICountryData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { region, country } = useContext(FilterContext);
  const [firstLoad, setFirstLoad] = useState<boolean>(true);
  const { theme } = useContext(themeContext);

  const themePallet = createTheme({
    palette: {
      primary: {
        main: theme === APP_THEME.LIGHT ? "#ffffff" : "#202c36",
      },
      secondary: {
        main: theme === APP_THEME.LIGHT ? "#f6f5f5" : "#2b3844", // Change secondary color
      },
      // You can also customize other colors like error, warning, info, etc.
    },
    components: {
      MuiSelect: {
        styleOverrides: {
          select: {
            "&:focus": {
              backgroundColor:
                theme === APP_THEME.LIGHT ? "#ffffff" : "#202c36",
            },
          },
        },
        defaultProps: {
          MenuProps: {
            PaperProps: {
              style: {
                backgroundColor:
                  theme === APP_THEME.LIGHT ? "#ffffff" : "#202c36", // Customize background color of the dropdown popup
                color: theme === APP_THEME.LIGHT ? "#111517" : "#ffffff",
              },
            },
          },
        },
      },
    },
  });

  const themeClass =
    theme === APP_THEME.LIGHT ? APP_THEME.LIGHT : APP_THEME.DARK;

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
    <MUIThemeProvider theme={themePallet}>
      <div className={`App nunito-sans-font ${themeClass}`}>
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
    </MUIThemeProvider>
  );
}

export default App;
