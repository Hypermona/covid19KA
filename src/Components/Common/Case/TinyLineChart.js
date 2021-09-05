import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const dataIN = [
  {
    cn: 5,
    ac: 3,
    rc: 3,
    dt: 3,
  },
  {
    cn: 4,
    ac: 4,
    rc: 3,
    dt: 3,
  },
  {
    cn: 4,
    ac: 4,
    rc: 5,
    dt: 4,
  },
  {
    cn: 5,
    ac: 5,
    rc: 6,
    dt: 5,
  },
  {
    cn: 5,
    ac: 6,
    rc: 6,
    dt: 5,
  },
  {
    cn: 4,
    ac: 7,
    rc: 7,
    dt: 5,
  },
  {
    cn: 6,
    ac: 6,
    rc: 8,
    dt: 4,
  },
];
const dataKA = [
  {
    cn: 1,
    ac: 1,
    rc: 2,
    dt: 1,
  },
  {
    cn: 2,
    ac: 2,
    rc: 2,
    dt: 1,
  },
  {
    cn: 1,
    ac: 1,
    rc: 3,
    dt: 1,
  },
  {
    cn: 1,
    ac: 2,
    rc: 2,
    dt: 2,
  },
  {
    cn: 1,
    ac: 2,
    rc: 2,
    dt: 1,
  },
  {
    cn: 2,
    ac: 3,
    rc: 3,
    dt: 3,
  },
  {
    cn: 1,
    ac: 3,
    rc: 4,
    dt: 2,
  },
];
export default function TinyLineChart({ graph, graphD, color }) {
  let dataKey = "";
  switch (graph) {
    case 1:
      dataKey = "cn";
      break;
    case 2:
      dataKey = "ac";
      break;
    case 3:
      dataKey = "rc";
      break;
    case 4:
      dataKey = "dt";
      break;
    default:
      dataKey = "dt";
      break;
  }
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={300} height={100} data={graphD ? dataIN : dataKA}>
        <Line
          type="basis"
          dot={false}
          dataKey={dataKey}
          animationBegin={500}
          stroke={color}
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
