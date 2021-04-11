import React from "react";
import CaseTableCell from "./CaseTableCell";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import CaseCart from "./CaseCart";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

function CaseTable({ data }) {
  const [graphView, setGraphView] = React.useState({
    Confirmed: false,
    Recovered: false,
    Deaths: false,
  });
  const type = graphView.Confirmed
    ? "Confirmed"
    : graphView.Recovered
    ? "Recovered"
    : graphView.Deaths
    ? "Deceased"
    : null;
  const classes = useStyles();
  const confirmedData = {
    lable: "Confiremed",
    daily: data.data[0].deltaconfirmed,
    delta: true,
    total: data.data[0].confirmed,
    color: "#dc3545",
    colorMid: "#dc354599",
    colorLight: "#dc354520",
    graph: 1,
    graphD: data.graphId === "TT" ? true : false,
    setGraphView: setGraphView,
    setGraph: {
      Confirmed: true,
      Recovered: false,
      Deaths: false,
    },
    graphId: data.graphId,
  };
  const activeData = {
    lable: "Active",
    delta: false,
    daily: data.data[0].deltaactive,
    total: data.data[0].active,
    color: "#007bff",
    colorMid: "#007bff99",
    graph: 2,
    graphD: data.graphId === "TT" ? true : false,
  };
  const recoveredData = {
    lable: "Recovered",
    daily: data.data[0].deltarecovered,
    delta: true,
    total: data.data[0].recovered,
    color: "#28a745",
    colorLight: "#28a74520",
    colorMid: "#28a74599",
    graph: 3,
    graphD: data.graphId === "TT" ? true : false,
    setGraphView: setGraphView,
    setGraph: {
      Confirmed: false,
      Recovered: true,
      Deaths: false,
    },
    graphId: data.graphId,
  };
  const deathData = {
    lable: "Deaths",
    daily: data.data[0].deltadeaths,
    delta: true,
    total: data.data[0].deaths,
    color: "#6c757d",
    colorLight: "#6c757d10",
    colorMid: "#6c757d99",
    graph: 4,
    graphD: data.graphId === "TT" ? true : false,
    graphId: data.graphId,
    setGraphView: setGraphView,
    setGraph: {
      Confirmed: false,
      Recovered: false,
      Deaths: true,
    },
  };
  return (
    <>
      <div style={{ color: "#6c757d", padding: "4vh 0 2vh 0" }}>
        <Typography
          align="center"
          variant="h5"
          style={{ fontWeight: "bolder" }}
        >
          {data.title}
        </Typography>
      </div>
      <Grid className={classes.root}>
        <CaseTableCell data={confirmedData} />
        <CaseTableCell data={activeData} />
        <CaseTableCell data={recoveredData} />
        <CaseTableCell data={deathData} />
      </Grid>
      <CaseCart
        type={type}
        id={data.graphId}
        graphView={graphView}
        setGraphView={setGraphView}
      />
    </>
  );
}
export default React.memo(CaseTable);
