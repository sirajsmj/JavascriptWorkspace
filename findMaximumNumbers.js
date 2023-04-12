/*
Find the maximum number in an array of numbers
*/

let numbers1 = [3, 6, 9, 4, 1, 2, 5];
function FindmaximumNumber(array) {
  let maximumNum = array[0];
  for (let i = 0; i < array.length; i++) {
    if (maximumNum < array[i]) {
      maximumNum = array[i];
    }
  }
  return `${maximumNum} is the maximum number in the given array`;
}
console.log(FindmaximumNumber(numbers1));
