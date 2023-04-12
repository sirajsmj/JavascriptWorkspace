/*
Create a function that filters out negative numbers
*/

function filterNegNumbers(array) {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      results.push(array[i]);
    }
  }
  return results;
}
console.log(filterNegNumbers([2, -8, 6, -1, -5, -4, 8, 3]));
