import React from "react";
import axios from "axios";
import Chart from "./Chart";
function CaseCart() {
  let data = {};
  let arryData = [];
  let DailyConfirmed = [];
  let DailyRecovered = [];
  let DailyDeaths = [];
  const [maxConfirmed, setMaxConfirmed] = React.useState(0);
  const [maxRecovered, setMaxRecovered] = React.useState(0);
  const [maxDeaths, setMaxDeaths] = React.useState(0);
  axios
    .get("https://api.covid19india.org/data.json")
    .then(function (response) {
      data = response; // handle success
      arryData = Object.entries(data.data.cases_time_series).map((e) => e[1]);

      for (let i = 0; i < arryData.length; i++) {
        DailyConfirmed.push({
          date: arryData[i].date,
          DailyConfirmed: arryData[i].dailyconfirmed,
        });
        DailyRecovered.push({
          date: arryData[i].date,
          DailyRecovered: arryData[i].dailyrecovered,
        });
        DailyDeaths.push({
          date: arryData[i].date,
          DailyDeaths: arryData[i].dailydeceased,
        });
      }
      setMaxConfirmed(
        Math.max(
          ...DailyConfirmed.map(function (o) {
            return o.DailyConfirmed;
          }, 0)
        )
      );
      setMaxRecovered(
        Math.max(
          ...DailyRecovered.map(function (o) {
            return o.DailyRecovered;
          }, 0)
        )
      );
      setMaxDeaths(
        Math.max.apply(
          Math,
          DailyDeaths.map(function (o) {
            return o.DailyDeaths;
          })
        )
      );
    })
    .catch(function (error) {
      console.log(error); // handle error
    });

  return (
    <div>
      <Chart data={DailyConfirmed} color="red" maxValue={maxConfirmed} />
      <Chart data={DailyRecovered} color="green" maxValue={maxRecovered} />
      <Chart data={DailyDeaths} color="gray" maxValue={maxDeaths} />
    </div>
  );
}

export default CaseCart;
