const counterNum = document.querySelector(".counter");
const increment = document.querySelector("#add-btn");
const decrement = document.querySelector("#low-btn");
const resetbtn = document.querySelector("#reset-btn");

let count = 0;

increment.addEventListener("click", increase);
decrement.addEventListener("click", decrease);
resetbtn.addEventListener("click", reset);

function increase() {
  count++;
  counterNum.innerHTML = count;
  if (count > 0) {
    counterNum.style.color = "green";
  } else if (count == 0) {
    counterNum.style.color = "white";
  }
  counterNum.animate([{ opacity: "0.2" }, { opacity: "1.0" }], {
    duration: 1000,
    fill: "forwards",
  });
}
function decrease() {
  count--;
  counterNum.innerHTML = count;
  if (count < 0) {
    counterNum.style.color = "red";
  } else if (count == 0) {
    counterNum.style.color = "white";
  }
  counterNum.animate([{ opacity: "0.2" }, { opacity: "1.0" }], {
    duration: 1000,
    fill: "forwards",
  });
}

function reset() {
  count = 0;
  counterNum.innerHTML = count;
  if (count < 0) {
    counterNum.style.color = "white";
  } else if (count > 0) {
    counterNum.style.color = "white";
  } else if (count == 0) {
    counterNum.style.color = "white";
  }
}
