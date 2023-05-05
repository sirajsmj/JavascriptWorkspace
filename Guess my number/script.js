let secretnumber = Math.trunc(Math.random() * 20 + 1);
const checkbtn = document.querySelector(".check");

document.querySelector("body").style.textAlign = "center";
document.querySelector(".number").style.fontSize = "90px";
document.querySelector(".guess").style.fontsize = "100px";
document.querySelector(".guess").style.width = "200px";

let highscore = document.querySelector(".highscore").textContent;
let scorevalue = document.querySelector(".score").textContent;

checkbtn.addEventListener("click", function () {
  let guess = document.querySelector(".guess").value;
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "Please input any Number";
  } else if (secretnumber == guess) {
    document.querySelector(".message").textContent =
      "Guessing Number is correct";

    document.querySelector(".message").style.backgroundColor = "green";
    document.querySelector(".message").style.width = "fit-content";
    document.querySelector(".message").style.margin = "5px auto";
    document.querySelector(".number").innerHTML = secretnumber;

    if (scorevalue > highscore) {
      highscore = scorevalue;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (secretnumber > guess) {
    if (scorevalue > 1) {
      document.querySelector(".message").textContent =
        "Guessing Number is too low";
      scorevalue--;
      document.querySelector(".score").textContent = scorevalue;
    } else {
      document.querySelector(".message").textContent =
        "You have lost the game. you cant continue";
      document.querySelector(".score").textContent = 0;
    }
  } else if (secretnumber < guess) {
    if (scorevalue > 1) {
      document.querySelector(".message").textContent =
        "Guessing Number is too High";
      scorevalue--;
      document.querySelector(".score").textContent = scorevalue;
    } else {
      document.querySelector(".message").textContent =
        "You have lost the game. you cant continue";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretnumber = Math.trunc(Math.random() * 20 + 1);
  if (scorevalue < highscore) {
    document.querySelector(".highscore").textContent = highscore;
    document.querySelector(".score").textContent = 20;
  } else {
    document.querySelector(".highscore").textContent = scorevalue;
    document.querySelector(".score").textContent = 20;
  }
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".message").style.backgroundColor = "white";
});
