import React from "react";
import TableBody from "../Common/Table/TableBody";
import TableHead from "../Common/Table/TableHead";
import axios from "axios";
import { sortAscending, sortDescending } from "../../Functions/Sort";

class Table extends React.Component {
  state = {
    data: null,
    sort: {
      confirmedD: true,
      activeD: true,
      recoveredD: true,
      deathsD: true,
    },
  };

  componentDidMount() {
    axios
      .get("https://api.covid19india.org/state_district_wise.json")
      .then((data) => {
        let newArr = [];
        Object.entries(data.data.Karnataka.districtData).map((e) => {
          newArr.push({ dist: e[0], ...e[1] });
        });
        this.setState({ data: sortDescending(newArr, "confirmed") });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const dataSortA = (value, set) => {
      this.setState((ps) => ({
        data: sortAscending(ps.data, value),
        sort: set,
      }));
    };
    const dataSortD = (value, set) => {
      if (this.state.data) {
        let data = sortDescending(this.state.data, value);
        this.setState({ data, sort: set });
      }
    };
    return (
      <div style={{ maxWidth: 800, margin: "auto" }}>
        <p
          style={{
            padding: "6vh 0 2vh 0",
            textAlign: "center",
            color: "grey",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          Casess In Karnataka District Wise
        </p>
        <TableHead
          dataSortA={dataSortA}
          dataSortD={dataSortD}
          sort={this.state.sort}
        />
        {this.state.data && <TableBody data={this.state.data} />}
      </div>
    );
  }
}

export default Table;
