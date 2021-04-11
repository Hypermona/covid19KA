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
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: "auto",
  },
  title: {
    flexGrow: 0.43,
  },
}));

export default function Header({ darkMode, setDarkMode }) {
  const classes = useStyles();

  const [drawer, setDrawer] = React.useState(false);
  const matches = useMediaQuery("(min-width:600px)");

  // strart of Installing pwa.................
  const [install, setInstall] = React.useState(true);
  const showInstallPromotion = () => {
    setInstall(true);
  };
  const hideInstallPromotion = () => {
    setInstall(false);
  };
  window.addEventListener("beforeinstallprompt", (event) => {
    console.log("👍", "beforeinstallprompt", event);
    window.deferredPrompt = event;
    showInstallPromotion();
  });

  const handleInstall = async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      return;
    }
    promptEvent.prompt();
    const result = await promptEvent.userChoice;
    console.log("👍", "userChoice", result);
    window.deferredPrompt = null;
    hideInstallPromotion();
  };
  window.addEventListener("appinstalled", (event) => {
    console.log("👍", "appinstalled", event);
    // Clear the deferredPrompt so it can be garbage collected
    window.deferredPrompt = null;
  });
  // end of Installing pwa.................

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
          <Link
            to="/"
            style={{
              textDecoration: "None",
              color: "inherit",
              cursor: "pointer",
            }}
            className={classes.title}
          >
            <Typography variant="h5">
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
          </Link>
          {matches ? (
            darkMode ? (
              <div
                onClick={() => setDarkMode(false)}
                style={{ padding: "20px", cursor: "pointer" }}
              >
                <BrightnessHighIcon />
              </div>
            ) : (
              <div
                onClick={() => setDarkMode(true)}
                style={{ padding: "20px", cursor: "pointer" }}
              >
                <Brightness4Icon />
              </div>
            )
          ) : null}
          {install && (
            <Button
              color="secondary"
              variant="contained"
              onClick={() => handleInstall()}
            >
              Install
            </Button>
          )}
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
