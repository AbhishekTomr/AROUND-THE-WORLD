import { Box, AppBar, Typography, Toolbar, IconButton } from "@mui/material";
import ThemeIcon from "../../assets/icons/DarkMode.svg";

type Props = {};

const Header = (props: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="header-wrap">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 800 }}
          >
            Where In the world?
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={ThemeIcon} alt="theme icon" />
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
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
