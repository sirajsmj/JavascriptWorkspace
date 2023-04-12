/*
Calculate the average of the numbers in an array of numbers
*/

let NumArray = [2, 4, 6, 8, 10];
function calculateAverage(array) {
  let total = 0;
  let averageNumber;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  averageNumber = total / array.length;
  return averageNumber;
}

console.log(calculateAverage(NumArray));
