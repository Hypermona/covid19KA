import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
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

export default function Chart({ data = [], color = "red" }) {
  const [startDate, setStartDate] = React.useState(30);
  let newData = [];

  for (let i = data.length - startDate; i < data.length; i++) {
    newData.push(data[i]);
  }

  console.log(startDate);
  var dataKeyX = Object.keys(newData[0] || {})[0];
  var dataKeyY = Object.keys(newData[0] || {})[1];

  return (
    <Container maxWidth="md">
      {newData !== [] ? (
        <div
          style={{
            width: "inherit",
            height: "45vh",
            margin: "auto",
            marginBottom: "50px",
          }}
        >
          <ResponsiveContainer>
            <BarChart data={newData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={dataKeyX} />
              <YAxis domain={[0, 130000]} />
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
              style={{ color }}
            >
              <Typography variant="caption">Beginning</Typography>
            </Button>
            <Button
              onClick={() => {
                setStartDate(90);
              }}
              style={{ color }}
            >
              <Typography variant="caption">90 Days</Typography>
            </Button>
            <Button
              onClick={() => {
                setStartDate(30);
              }}
              style={{ color }}
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