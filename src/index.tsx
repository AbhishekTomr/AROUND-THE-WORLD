import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FilterContextProvider } from "./context/FilterContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryInsights from "./components/Countries/CountryInsights";
import ThemeProvider from "./context/ThemeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="App">
        <FilterContextProvider>
          <ThemeProvider>
            <Routes>
              <Route path="/" Component={App} />
              <Route
                path="/insights/:countryCode"
                Component={CountryInsights}
              />
            </Routes>
          </ThemeProvider>
        </FilterContextProvider>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
