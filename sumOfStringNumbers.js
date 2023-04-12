/*
Calculate the sum of numbers in a comma delimited string
*/

let array = "1,5,9,7,4";

function sumofstringNumbers(string) {
  let sumofstring = 0;
  let splitted = string.split(",");
  for (let i = 0; i < splitted.length; i++) {
    sumofstring += Number(splitted[i]);
  }
  return sumofstring;
}
console.log(sumofstringNumbers(array));
