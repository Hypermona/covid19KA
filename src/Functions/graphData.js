export function graphData1(data, valueX, valueY) {
  let graphData = [];

  for (let i = 0; i < data.length; i++) {
    graphData.push({
      [valueX]: data[i][valueX],
      [valueY]: data[i][valueY],
    });
  }
  return graphData;
}
export function graphData2(data, valueX, valueY) {
  let graphData = [];
  let arrData = data.filter((data) => data.status === valueY);
  for (let i = 0; i < arrData.length; i++) {
    graphData.push({
      [valueX]: arrData[i][valueX],
      [valueY]: arrData[i].ka,
    });
  }
  return graphData;
}
