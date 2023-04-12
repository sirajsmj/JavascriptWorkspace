/*
Sort an array from lowest to highest
*/
let numbers = [2, 3, 14, 5, 16, 7, 8, 11, 10];
let sortResult = [];
function sortNumbers(a) {
  sortResult.push(
    a.sort(function (a, b) {
      return a - b;
    })
  );
  return sortResult;
}
console.log(sortNumbers(numbers));
