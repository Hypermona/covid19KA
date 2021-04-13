import React from "react";
import hw from "../../Images/hand_wash.gif";

function Loading() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20vh",
      }}
    >
      <img src={hw} alt="loading..." />
      <h5>Loading...</h5>
    </div>
  );
}

export default Loading;
