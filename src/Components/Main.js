import React from "react";
import Button from "@material-ui/core/Button";
import { Helmet } from "react-helmet";
import Container from "@material-ui/core/Container";
import Header from "./Header/Header";
import CaseChart from "./Common/Case/CaseCart";
import CaseTable from "./Common/Case/CaseTable";
import DataComp from "./DataComp";
import Image from "./BannerImage/Image";

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
    this.props.setDarkMode(false);
    return (
      <>
        <Helmet>
          <title>Covid19Karnataka2 | Home</title>
          <meta name="description" content="Home page of covid19karnataka" />
        </Helmet>
        <Header />
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
        <CaseChart />
      </>
    );
  }
}

export default Main;
