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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: "auto",
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  const [drawer, setDrawer] = React.useState(false);
  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
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
            Covid19Karnataka
          </Typography>
          <Button color="primary" variant="contained">
            Install
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawer} onClose={() => setDrawer(false)}>
        <MenuDrawer />
      </Drawer>
    </div>
  );
}
