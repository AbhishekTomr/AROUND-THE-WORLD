import { createContext, useState } from "react";
import { APP_THEME } from "../constants";
import { theme } from "../types";
import _ from "lodash";

interface IThemeContext {
  theme: theme;
  toggleTheme: () => void;
}

const initialState: IThemeContext = {
  theme: APP_THEME.LIGHT,
  toggleTheme: _.noop,
};

export const themeContext = createContext<IThemeContext>(initialState);

// theme Provider

interface IThemeProvider {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: IThemeProvider) => {
  const [theme, setTheme] = useState<theme>(initialState.theme);

  const toggleTheme = () =>
    setTheme((prevTheme) =>
      prevTheme === APP_THEME.DARK ? APP_THEME.LIGHT : APP_THEME.DARK
    );

  return (
    <themeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
