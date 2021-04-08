import React, { Component } from "react";
import axios from "axios";
import objectToArrOfObj from "../Functions/ObjectToArrOfObj";
import { sortAscending, sortDescending } from "../Functions/Sort";
import Cases from "./Cases/Cases";

export default class DataComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    axios
      .get("https://api.covid19india.org/data.json")
      .then((data) => {
        this.setState({ data });
      })
      .catch(function (error) {
        console.log(error); // handle error
      });
  }

  render() {
    return (
      <div>
        {this.state.data ? (
          <Cases data={this.state.data.data.statewise} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}
