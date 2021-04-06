export default function objectToArrOfObj(data) {
  return Object.entries(data).map((e) => e[1]);
}
