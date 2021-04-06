import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import BarChartIcon from "@material-ui/icons/BarChart";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import Img from "../../Images/searching.png";

const data = [
  {
    icon: <HomeIcon fontSize="large" />,
    title: "Home",
  },
  {
    icon: <BarChartIcon fontSize="large" />,
    title: "Graph Data",
  },
  {
    icon: <InfoIcon fontSize="large" />,
    title: "About",
  },
];

function MenuDrawer() {
  return (
    <List component="nav" style={{ width: 250 }}>
      <img
        src={Img}
        alt="searching"
        width={100}
        style={{ margin: "30px 60px" }}
      />
      {data.map((item) => (
        <ListItem button key={item.title}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItem>
      ))}
    </List>
  );
}

export default MenuDrawer;
