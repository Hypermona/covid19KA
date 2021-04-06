import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header/Header";
import CaseChart from "./Common/Case/CaseCart";
import DataComp from "./DataComp";
import Image from "./BannerImage/Image";
import { Route, Switch, Redirect } from "react-router-dom";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false,
      data: [],
    };
  }
  componentDidMount() {
    //api.covid19india.org/state_district_wise.json
    //api.covid19india.org/states_daily.json
    fetch("https://api.covid19india.org/data.json")
      .then((data) => data.json())
      .then((data) => {
        console.log(
          data.statewise
          // .map((data) => data.ka)
          // .filter((data) => data.status === "Confirmed")
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { darkMode, setDarkMode } = this.props;
    return (
      <>
        <Helmet>
          <title>Covid19Karnataka2 | Home</title>
          <meta name="description" content="Home page of covid19karnataka" />
        </Helmet>
        <div style={{ position: "sticky", top: 0, zIndex: 10 }}>
          <Header setDarkMode={setDarkMode} darkMode={darkMode} />
        </div>
        <Switch>
          <Route exact path="/">
            <Image />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100vw",
              }}
            >
              <DataComp />
            </div>
          </Route>
          <Route exact path="/graph">
            <CaseChart />
          </Route>
          <Redirect to="/" />
        </Switch>
      </>
    );
  }
}

export default Main;
