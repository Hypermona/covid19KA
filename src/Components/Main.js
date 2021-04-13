import React, { lazy, Suspense } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Loading from "./Loading/Loading";
import { Route, Switch, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";

const DataComp = lazy(() => import("./DataComp"));
const About = lazy(() => import("./About/About"));

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
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/">
              <DataComp />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Redirect to="/" />
          </Switch>
          <Footer />
        </Suspense>
      </>
    );
  }
}

export default Main;
