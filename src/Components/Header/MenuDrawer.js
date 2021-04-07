import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import BarChartIcon from "@material-ui/icons/BarChart";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import Img from "../../Images/searching.png";
import { Link } from "react-router-dom";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";

const data = [
  {
    icon: <HomeIcon fontSize="large" />,
    title: "Home",
    link: "/",
  },
  {
    icon: <BarChartIcon fontSize="large" />,
    title: "Graph Data",
    link: "/graph",
  },
  {
    icon: <InfoIcon fontSize="large" />,
    title: "About",
    link: "/about",
  },
];

function MenuDrawer({ setDrawer, darkMode, setDarkMode }) {
  return (
    <List
      component="nav"
      style={{ width: 250 }}
      onKeyDown={() => setDrawer(false)}
      onClick={() => setDrawer(false)}
    >
      <img
        src={Img}
        alt="searching"
        width={100}
        style={{ margin: "30px 60px" }}
      />
      {data.map((item) => (
        <Link
          to={item.link}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ListItem button key={item.title}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        </Link>
      ))}

      <ListItem button onClick={() => setDarkMode(!darkMode)}>
        <ListItemIcon>
          {darkMode ? <Brightness4Icon /> : <BrightnessHighIcon />}
        </ListItemIcon>
        <ListItemText primary="Toggle dark/light" />
      </ListItem>
    </List>
  );
}

export default MenuDrawer;
