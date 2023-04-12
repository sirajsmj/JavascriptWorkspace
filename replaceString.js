let string1 = "Hello siraj";
console.log("Before replace " + string1);
function replaceString(a) {
  let replacedString = a.replace("Hello", "Haai");
  return replacedString;
}
console.log("After replace " + replaceString(string1));
