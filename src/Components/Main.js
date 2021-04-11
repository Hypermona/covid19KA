import React, { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import Header from "./Header/Header";
import { Route, Switch, Redirect } from "react-router-dom";
import Footer from "./Footer/Footer";

const Table = lazy(() => import("./Table/Table"));
const DataComp = lazy(() => import("./DataComp"));
const About = lazy(() => import("./About/About"));
const Image = lazy(() => import("./BannerImage/Image"));

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false,
      data: [],
    };
  }
  componentDidMount() {
    fetch("https://api.covid19india.org/data.json")
      .then((data) => data.json())
      .then((data) => {
        console.log(data.statewise);
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
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/">
              <Image />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "98vw",
                }}
              >
                <DataComp />
              </div>
              <Table />
            </Route>

            <Route exact path="/about">
              <About />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Suspense>

        <Footer />
      </>
    );
  }
}

export default Main;
