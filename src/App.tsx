import "./App.scss";
import Header from "./components/Header/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { fetchAllCountries } from "./services/countries.services";
import { useCallback, useEffect, useState } from "react";
import { CircularProgress, Box } from "@mui/material";
import { ICountryData } from "./types";
import Countries from "./components/Countries/Countries";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff", // Change primary color
    },
    secondary: {
      main: "#f50057", // Change secondary color
    },
    // You can also customize other colors like error, warning, info, etc.
  },
});

function App() {
  const [countries, setCountries] = useState<ICountryData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetchAllCountries()
      .then((countries: ICountryData[]) => {
        setCountries(countries);
      })
      .catch(() => {
        console.error("error in fetching countries");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
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
    </ThemeProvider>
  );
}

export default App;
