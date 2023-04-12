/*
Reverse a String
*/

function reverseString(string) {
  let storedstring = "";
  let splittededstring = string.split("");
  for (let i = splittededstring.length - 1; i >= 0; i--) {
    storedstring += splittededstring[i];
  }
  return storedstring;
}
console.log(reverseString("maximum"));
