// to find the positions of a string "r"
function indexofstring(a, b) {
  let result = a.indexOf(b);
  return result;
}
console.log(indexofstring("laptop", "t"));

function splittedword(a, b) {
  let indexno = a.indexOf(b);
  let result2 = a.slice(indexno);
  return result2;
}
console.log(splittedword("photoshop", "t"));

function substringmethod(a, b) {
  let indexno = a.indexOf(b);
  let result2 = a.substring((indexno, 6));
  return result2;
}
console.log(substringmethod("photoshop", "t"));

function substringmethod(a, b) {
  let indexno = a.indexOf(b);
  let result2 = a.substr(indexno, 3);
  return result2;
}
console.log(substringmethod("photoshop", "t"));

let car = "*-&%$";
console.log(car.charAt(4));
