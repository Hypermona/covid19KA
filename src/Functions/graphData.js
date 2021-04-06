export default function graphData(data, valueX, valueY) {
  let graphData = [];

  for (let i = 0; i < data.length; i++) {
    graphData.push({
      [valueX]: data[i][valueX],
      [valueY]: data[i][valueY],
    });
  }
  return graphData;
}
