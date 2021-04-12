import React, { lazy, Suspense } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Route, Switch, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";

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

  render() {
    const { darkMode, setDarkMode } = this.props;

    return (
      <>
        <Helmet>
          <title>Covid19Karnataka | Home</title>
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
