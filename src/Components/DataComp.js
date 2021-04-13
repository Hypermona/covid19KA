import React, { Component } from "react";

import axios from "axios";
import Cases from "./Cases/Cases";
import Image from "./BannerImage/Image";
import Loading from "./Loading/Loading";
import Table from "./Table/Table";

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
          <>
            <Image />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "98vw",
              }}
            >
              <Cases data={this.state.data.data.statewise} />
            </div>
            <Table />
          </>
        ) : (
          <>
            <Loading />
            <h5 align="center">Almost Finished...</h5>
          </>
        )}
      </div>
    );
  }
}
