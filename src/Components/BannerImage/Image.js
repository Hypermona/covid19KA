import React from "react";
import img from "../../Images/stop.png";

function Image() {
  return (
    <div style={{ textAlign: "center" }} className="animated fadeIn">
      <img src={img} alt="taking_rest" height="100%" width="300px" />
    </div>
  );
}

export default Image;
