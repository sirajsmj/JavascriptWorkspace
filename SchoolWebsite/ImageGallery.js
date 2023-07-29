const container = document.querySelector(".images");
const prvbtn = document.querySelector(".prevbtn");
const nxbtn = document.querySelector(".nextbtn");

let counter = 1;

container.style.backgroundImage = `url(school1.jpg)`;
container.style.backgroundSize = "cover";

prvbtn.addEventListener("click", prev);
nxbtn.addEventListener("click", nxt);

function nxt() {
  if (counter == 5) {
    counter = 0;
  }
  counter++;
  container.style.backgroundImage = `url(school${counter}.jpg)`;
  container.style.backgroundSize = "cover";
}
function prev() {
  if (counter == 1) {
    counter = 6;
  }
  counter--;
  container.style.backgroundImage = `url(school${counter}.jpg)`;
  container.style.backgroundSize = "cover";
}
