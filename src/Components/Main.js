import React from "react";
import Button from "@material-ui/core/Button";
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
        Hello Main {this.state.isDark ? "flase" : "True"} {this.props.name}
        <Button color="secondary" variant="contained">
          Hello9
        </Button>
      </div>
    );
  }
}

export default Main;
