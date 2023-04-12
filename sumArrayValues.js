/*
Calculate the sum of numbers within an array
*/
let numbers = [2, 3, 14, 5, 16, 7, 8, 11, 10];
let sumofArray = 0;
function sumNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    sumofArray += array[i];
  }
  return sumofArray;
}
console.log(sumNumbers(numbers));
