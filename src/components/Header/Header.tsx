import { Box, AppBar, Typography, Toolbar, IconButton } from "@mui/material";
import ThemeIconDark from "../../assets/icons/DarkModeActive.svg";
import ThemeIconLight from "../../assets/icons/LightModeActive.svg";
import Image from "../Common/Image";
import { useContext } from "react";
import { themeContext } from "../../context/ThemeContext";
import Btn from "../Common/Btn";
import "./Header.scss";

type Props = {};

const Header = (props: Props) => {
  const { toggleTheme } = useContext(themeContext);
  return (
    <AppBar position="static" className="header-wrap">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: 800 }}
        >
          Where In the world?
        </Typography>
        <Btn customClass="transparent-borders" onClick={toggleTheme}>
          <Image
            darkThemeSrc={ThemeIconDark}
            lightThemeSrc={ThemeIconLight}
            alt="theme icon"
          />
          <Typography
            variant="h6"
            component="p"
            sx={{
              flexGrow: 1,
              fontSize: "14px",
              marginLeft: "5px",
              fontWeight: 500,
            }}
          >
            Dark Mode
          </Typography>
        </Btn>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
