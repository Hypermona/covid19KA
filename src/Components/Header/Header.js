import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import MenuDrawer from "./MenuDrawer";
import Chip from "@material-ui/core/Chip";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: "auto",
  },
  title: {
    flexGrow: 0.5,
  },
}));

export default function Header({ darkMode, setDarkMode }) {
  const classes = useStyles();
  const [drawer, setDrawer] = React.useState(false);
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#424242" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawer(!drawer)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            COVID19
            <Chip
              color="secondary"
              label={
                <Typography variant={"h6"} style={{ fontWeight: "600" }}>
                  KARNATAKA
                </Typography>
              }
              variant="outlined"
            />
          </Typography>
          {matches ? (
            darkMode ? (
              <div
                onClick={() => setDarkMode(false)}
                style={{ padding: "20px" }}
              >
                <BrightnessHighIcon />
              </div>
            ) : (
              <div
                onClick={() => setDarkMode(true)}
                style={{ padding: "20px" }}
              >
                <Brightness4Icon />
              </div>
            )
          ) : null}
          <Button color="secondary" variant="contained">
            Install
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawer} onClose={() => setDrawer(false)}>
        <MenuDrawer
          setDrawer={setDrawer}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </Drawer>
    </div>
  );
}
