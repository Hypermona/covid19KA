export function sortAscending(data, value) {
  return data.sort((a, b) => (a[value] > b[value] ? 1 : -1));
}
export function sortDescending(data, value) {
  return data.sort((a, b) => (a[value] < b[value] ? 1 : -1));
}
