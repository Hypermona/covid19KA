import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false,
    };
  }
  render() {
    return (
      <div>
        Hello Main {this.state.isDark ? "flase" : "True"} {this.props.name}
      </div>
    );
  }
}

export default Main;
