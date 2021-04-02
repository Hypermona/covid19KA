import React from "react";
import axios from "axios";
import Chart from "./Chart";
function CaseCart() {
  let data = {};
  let newData = [];
  let newData1 = [];
  React.useEffect(() => {
    axios
      .get("https://api.covid19india.org/data.json")
      .then(function (response) {
        // handle success
        data = response;
        newData = Object.entries(data.data.cases_time_series).map((e) => e[1]);
        console.log(newData);
        for (let i = 0; i < newData.length; i++) {
          newData1.push({
            date: newData[i].date,
            dailyconfirmed: newData[i].dailyconfirmed,
          });
        }
        console.log(newData1);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  });

  return (
    <div>
      <Chart data={newData1} color="green" />
      <Chart data={newData1} color="gray" />
    </div>
  );
}

export default CaseCart;
