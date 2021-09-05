import React from "react";
import axios from "axios";
import Chart from "./Chart";
import objectToArrOfObj from "../../../Functions/ObjectToArrOfObj";
import { graphData1, graphData2 } from "../../../Functions/graphData";

class CaseCart extends React.Component {
  state = {
    data1: null,
    data2: null,
  };

  componentDidMount() {
    axios
      .get("https://data.covid19india.org/data.json")

      .then((data) => {
        this.setState({ data1: data });
      })
      .catch(function (error) {
        console.log(error); // handle error
      });
    axios
      .get("https://data.covid19india.org/states_daily.json")

      .then((data) => {
        this.setState({ data2: data });
      })
      .catch(function (error) {
        console.log(error); // handle error
      });
  }

  render() {
    let DailyConfirmed = [];
    let DailyRecovered = [];
    let DailyDeaths = [];
    let maxConfirmed = {};
    let maxRecovered = {};
    let maxDeaths = {};
    if (this.props.id === "TT" && this.state.data1) {
      const arrayData = objectToArrOfObj(this.state.data1.data.cases_time_series);

      DailyConfirmed = graphData1(arrayData, "date", "dailyconfirmed");
      DailyRecovered = graphData1(arrayData, "date", "dailyrecovered");
      DailyDeaths = graphData1(arrayData, "date", "dailydeceased");

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
    if (this.props.id === "KA" && this.state.data2) {
      DailyConfirmed = graphData2(this.state.data2.data.states_daily, "date", "Confirmed");
      DailyRecovered = graphData2(this.state.data2.data.states_daily, "date", "Recovered");
      DailyDeaths = graphData2(this.state.data2.data.states_daily, "date", "Deceased");

      maxConfirmed = Math.max(
        ...DailyConfirmed.map(function (o) {
          return o.Confirmed;
        }, 0)
      );

      maxRecovered = Math.max(
        ...DailyRecovered.map(function (o) {
          return o.Recovered;
        }, 0)
      );

      maxDeaths = Math.max.apply(
        Math,
        DailyDeaths.map(function (o) {
          return o.Deceased;
        })
      );
    }
    switch (this.props.type) {
      case "Confirmed":
        return (
          <Chart
            data={DailyConfirmed}
            color="red"
            maxValue={maxConfirmed}
            setGraphView={this.props.setGraphView}
            graphId={this.props.id}
          />
        );

      case "Recovered":
        return (
          <Chart
            data={DailyRecovered}
            color="green"
            maxValue={maxRecovered}
            setGraphView={this.props.setGraphView}
            graphId={this.props.id}
          />
        );

      case "Deceased":
        return (
          <Chart
            data={DailyDeaths}
            color="gray"
            maxValue={maxDeaths}
            graphId={this.props.id}
            setGraphView={this.props.setGraphView}
          />
        );

      default:
        return null;
    }
  }
}

export default React.memo(CaseCart);
