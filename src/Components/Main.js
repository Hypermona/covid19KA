import React from "react";
import Button from "@material-ui/core/Button";
import { Helmet } from "react-helmet";
import Container from "@material-ui/core/Container";
import Header from "./Header/Header";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false,
    };
  }
  render() {
    this.props.setDarkMode(false);
    return (
      <div>
        <Helmet>
          <title>Covid19Karnataka2 | Home</title>
          <meta name="description" content="Home page of covid19karnataka" />
        </Helmet>
        <Header />
        <Container style={{ color: "red" }}>
          {this.state.isDark ? "flase" : "True"} {this.props.name}
          <Button color="secondary" variant="contained">
            Hello9
          </Button>
        </Container>
      </div>
    );
  }
}

export default Main;
