const bodycolor = document.querySelector("body");
const btn = document.getElementById("button");

const colors = [
  "green",
  "red",
  "blue",
  "orange",
  "yellow",
  "violet",
  "purple",
  "black",
  "brown",
];

btn.addEventListener("click", function () {
  const number = Math.floor(Math.random() * 10);
  bodycolor.style.backgroundColor = colors[number];
  console.log(number);
});
