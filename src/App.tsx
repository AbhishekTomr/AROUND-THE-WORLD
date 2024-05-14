import "./App.scss";
import Header from "./components/Header/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  fetchAllCountries,
  fetchCountriesByName,
  fetchCountriesByRegion,
  fetchCountryDetails,
} from "./services/countries.services";
import { useEffect } from "react";

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
  useEffect(() => {
    fetchCountryDetails("india").then((data) => {
      console.log("data", data);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
