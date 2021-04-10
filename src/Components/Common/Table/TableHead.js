import { IconButton } from "@material-ui/core";
import React from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function TableHead({ dataSortA, dataSortD, sort }) {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          width: matches ? "28vw" : "37vw",
          justifyContent: "center",
          backgroundColor: "#6c757d10",
          margin: "0.5vw",
          borderRadius: "4px",
        }}
      >
        <p style={{ padding: "1vw", color: "#6c757d", fontWeight: "600" }}>
          District
        </p>
      </div>
      <div
        style={{
          display: "flex",
          width: "20vw",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#6c757d10",
          margin: "0.5vw",
          borderRadius: "4px",
        }}
      >
        <p
          style={{
            padding: "1vw",
            color: "#6c757d",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Confirmed
          {sort.confirmedD ? (
            <span onClick={() => dataSortA("confirmed", { confirmedD: false })}>
              <ExpandMoreIcon />
            </span>
          ) : (
            <span onClick={() => dataSortD("confirmed", { confirmedD: true })}>
              <ExpandLessIcon />
            </span>
          )}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          width: "20vw",
          justifyContent: "center",
          backgroundColor: "#6c757d10",
          margin: "0.5vw",
          borderRadius: "4px",
        }}
      >
        <p
          style={{
            padding: "1vw",
            color: "#6c757d",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Active
          {sort.activeD ? (
            <span onClick={() => dataSortA("active", { activeD: false })}>
              <ExpandMoreIcon />
            </span>
          ) : (
            <span onClick={() => dataSortD("active", { activeD: true })}>
              <ExpandLessIcon />
            </span>
          )}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          width: "20vw",
          justifyContent: "center",
          backgroundColor: "#6c757d10",
          margin: "0.5vw",
          borderRadius: "4px",
        }}
      >
        <p
          style={{
            padding: "1vw",
            color: "#6c757d",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Recovered
          {sort.recoveredD ? (
            <span onClick={() => dataSortA("recovered", { recoveredD: false })}>
              <ExpandMoreIcon />
            </span>
          ) : (
            <span onClick={() => dataSortD("recovered", { recoveredD: true })}>
              <ExpandLessIcon />
            </span>
          )}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          width: "20vw",
          justifyContent: "center",
          backgroundColor: "#6c757d10",
          margin: "0.5vw",
          borderRadius: "4px",
        }}
      >
        <p
          style={{
            padding: "1vw",
            color: "#6c757d",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Deaths
          {sort.deceasedD ? (
            <span onClick={() => dataSortA("deceased", { deceasedD: false })}>
              <ExpandMoreIcon />
            </span>
          ) : (
            <span onClick={() => dataSortD("deceased", { deceasedD: true })}>
              <ExpandLessIcon />
            </span>
          )}
        </p>
      </div>
    </div>
  );
}

export default TableHead;
