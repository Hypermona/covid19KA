import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CancelIcon from "@material-ui/icons/Cancel";
import IconButton from "@material-ui/core/IconButton";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Brush,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Chart({ data = [], color = "red", maxValue, setGraphView, graphId }) {
  const [startDate, setStartDate] = React.useState(30);
  const matches = !useMediaQuery("(min-width:600px)");
  let newData = [];

  for (let i = data.length - startDate; i < data.length; i++) {
    newData.push(data[i]);
  }

  var dataKeyX = Object.keys(newData[0] || {})[0];
  var dataKeyY = Object.keys(newData[0] || {})[1];

  return (
    <Container maxWidth="md">
      {newData !== [] ? (
        <div
          style={{
            width: "inherit",
            height: matches ? "35vh" : "45vh",
            margin: "auto",
            marginBottom: "50px",
          }}
          id="graph"
        >
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton
              onClick={() => {
                setGraphView({
                  Confirmed: false,
                  Recovered: false,
                  Deaths: false,
                });
              }}
            >
              <CancelIcon />
            </IconButton>
          </div>
          <ResponsiveContainer>
            <BarChart data={newData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={dataKeyX} />
              <YAxis
                domain={[0, maxValue + maxValue * 0.1]}
                hide={matches ? true : false}
              />
              <Tooltip />
              <Legend />
              <Brush
                dataKey={dataKeyX}
                width="inherit"
                height={30}
                stroke="black"
              />

              <Bar dataKey={dataKeyY} fill={color} />
            </BarChart>
          </ResponsiveContainer>

          <ButtonGroup
            size="small"
            color="primary"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Button
              onClick={() => {
                setStartDate(data.length);
              }}
              variant={startDate === data.length ? "contained" : "outlined"}
            >
              <Typography variant="caption">Beginning</Typography>
            </Button>
            <Button
              onClick={() => {
                setStartDate(90);
              }}
              variant={startDate === 90 ? "contained" : "outlined"}
            >
              <Typography variant="caption">90 Days</Typography>
            </Button>
            <Button
              onClick={() => {
                setStartDate(30);
              }}
              variant={startDate === 30 ? "contained" : "outlined"}
            >
              <Typography variant="caption">30 Days</Typography>
            </Button>
          </ButtonGroup>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </Container>
  );
}

export default React.memo(Chart);
