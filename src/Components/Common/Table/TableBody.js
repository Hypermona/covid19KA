import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import numToRupee from "../../../Functions/NumToRupee";

const CellTitle = ({ data }) => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <div
      style={{
        width: matches ? "15vw" : "30vw",
        padding: "1vw",
        margin: "0.5vw",
        color: "#6c757d",
        fontWeight: "600",
        backgroundColor: "#6c757d10",
        borderRadius: "4px",
      }}
    >
      {data}
    </div>
  );
};

const CellData = ({ data, dataDelta, color, colorDelta }) => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <div
      style={{
        display: "flex",
        width: matches ? "10vw" : "20vw",
        justifyContent: "flex-end",
        flexWrap: "wrap",
        backgroundColor: "#6c757d10",
        margin: "0.5vw",
        borderRadius: "4px",
      }}
    >
      {dataDelta && dataDelta > 0 ? (
        <p
          style={{
            padding: "1vw 0.1vw",
            fontSize: "0.6rem",
            color: colorDelta,
          }}
        >
          &uarr;{numToRupee(dataDelta)}
        </p>
      ) : null}
      <p style={{ padding: "1vw", color: "#6c757d", fontWeight: "600" }}>
        {numToRupee(data)}
      </p>
    </div>
  );
};

function TableBody({ data }) {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <div>
      {data &&
        data.map((e) => (
          <div
            style={{
              display: "flex",
            }}
            key={e.dist}
          >
            <CellTitle data={e.dist} />
            <div
              style={{
                display: "flex",
                width: matches ? "45vw" : "69vw",
                justifyContent: "center",
              }}
            >
              <CellData
                data={e.confirmed}
                dataDelta={e.delta.confirmed}
                color="#dc3545"
                colorDelta="#dc354599"
              />
              <CellData
                data={e.active}
                dataDelta={e.delta.active}
                colorDelta="#dc354599"
              />
              <CellData
                data={e.recovered}
                dataDelta={e.delta.recovered}
                colorDelta="#28a74599"
              />
              <CellData
                data={e.deceased}
                dataDelta={e.delta.deceased}
                colorDelta="#6c757d99"
              />
            </div>
          </div>
        ))}
    </div>
  );
}

export default TableBody;
