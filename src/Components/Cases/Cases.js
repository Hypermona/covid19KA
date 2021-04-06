import React from "react";
import CaseTable from "../Common/Case/CaseTable";

function Cases({ data }) {
  const InData = {
    title: "India",
    data: data.filter((data) => data.statecode === "TT"),
    graphId: "TT",
  };
  const KaData = {
    title: "Karnataka",
    data: data.filter((data) => data.statecode === "KA"),
    graphId: "KA",
  };

  return (
    <div>
      <CaseTable data={KaData} />
      <CaseTable data={InData} />
    </div>
  );
}

export default Cases;
