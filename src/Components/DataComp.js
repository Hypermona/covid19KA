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
    // "https://api.covid19india.org/data.json";
    axios
      .get("https://api.covid19india.org/data.json")
      .then((data) => {
        this.setState({ data });
        // arryData = Object.entries(data.data.cases_time_series).map((e) => e[1]);

        // for (let i = 0; i < arryData.length; i++) {
        //   DailyConfirmed.push({
        //     date: arryData[i].date,
        //     DailyConfirmed: arryData[i].dailyconfirmed,
        //   });
        //   DailyRecovered.push({
        //     date: arryData[i].date,
        //     DailyRecovered: arryData[i].dailyrecovered,
        //   });
        //   DailyDeaths.push({
        //     date: arryData[i].date,
        //     DailyDeaths: arryData[i].dailydeceased,
        //   });
        // }
        // setMaxConfirmed(
        //   Math.max(
        //     ...DailyConfirmed.map(function (o) {
        //       return o.DailyConfirmed;
        //     }, 0)
        //   )
        // );
        // setMaxRecovered(
        //   Math.max(
        //     ...DailyRecovered.map(function (o) {
        //       return o.DailyRecovered;
        //     }, 0)
        //   )
        // );
        // setMaxDeaths(
        //   Math.max.apply(
        //     Math,
        //     DailyDeaths.map(function (o) {
        //       return o.DailyDeaths;
        //     })
        //   )
        // );
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
