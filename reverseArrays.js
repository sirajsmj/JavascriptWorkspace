/*
Create a function that reverses an array
*/
let numbers = [2, 3, 14, 5, 16, 7, 8, 11, 10];
let reverseResult = [];
function reverseArray(arrayNumbers) {
  for (let i = arrayNumbers.length - 1; i >= 0; i--) {
    reverseResult.push(arrayNumbers[i]);
  }
  return reverseResult;
}
console.log(reverseArray(numbers));
