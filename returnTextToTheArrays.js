/*
Create a function that will return an array with words inside a text
*/
function wordInsideText(string) {
  let result = [];
  let splitted = string.split(" ");
  for (let i = 0; i < splitted.length; i++) {
    result.push(`${splitted[i]} `);
  }
  return result;
}
console.log(
  wordInsideText(
    "Create a function that will return an array with words inside a text"
  )
);
