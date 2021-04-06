import React from "react";
import axios from "axios";
import Chart from "./Chart";
import graphData from "../../../Functions/graphData";
import objectToArrOfObj from "../../../Functions/ObjectToArrOfObj";
class CaseCart extends React.Component {
  state = {
    data: null,
    arrayData: {},
    DailyConfirmed: [],
    DailyRecovered: [],
    DailyDeaths: [],
    maxConfirmed: 0,
    maxRecovered: 0,
    maxDeaths: 0,
  };
  handleData(data) {
    this.setState({ data: data });
  }
  componentDidMount() {
    axios
      .get("https://api.covid19india.org/data.json")

      .then((data) => {
        this.setState({ data: data });
      })
      .catch(function (error) {
        console.log(error); // handle error
      });
  }

  render() {
    console.log("case cart", this.state.data);
    let DailyConfirmed = [];
    let DailyRecovered = [];
    let DailyDeaths = [];
    let maxConfirmed = {};
    let maxRecovered = {};
    let maxDeaths = {};
    if (this.state.data) {
      const arrayData = objectToArrOfObj(
        this.state.data.data.cases_time_series
      );

      DailyConfirmed = graphData(arrayData, "date", "dailyconfirmed");
      DailyRecovered = graphData(arrayData, "date", "dailyrecovered");
      DailyDeaths = graphData(arrayData, "date", "dailydeceased");

      maxConfirmed = Math.max(
        ...DailyConfirmed.map(function (o) {
          return o.dailyconfirmed;
        }, 0)
      );

      maxRecovered = Math.max(
        ...DailyRecovered.map(function (o) {
          return o.dailyrecovered;
        }, 0)
      );

      maxDeaths = Math.max.apply(
        Math,
        DailyDeaths.map(function (o) {
          return o.dailydeceased;
        })
      );
    }
    console.log("maxDeaths", maxDeaths);
    return (
      <div>
        <Chart data={DailyConfirmed} color="red" maxValue={maxConfirmed} />
        <Chart data={DailyRecovered} color="green" maxValue={maxRecovered} />
        <Chart data={DailyDeaths} color="gray" maxValue={maxDeaths} />
      </div>
    );
  }
}

export default React.memo(CaseCart);
