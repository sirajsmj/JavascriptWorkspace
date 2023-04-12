/*
Create a function that will capitalize the first letter of each word in a text
*/

function captializeWords(string) {
  let changedString = "";
  let splitted = string.split(" ");
  for (let i = 0; i < splitted.length; i++) {
    changedString +=
      splitted[i].charAt(0).toUpperCase() + splitted[i].slice(1) + " ";
  }
  return changedString;
}
console.log(
  captializeWords(" capitalize the first letter of each word in a text")
);
