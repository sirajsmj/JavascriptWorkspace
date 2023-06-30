const btn = document.getElementById("button");
const inputbox = document.getElementById("inputbox");
const task = document.getElementById("task1");
console.log(btn);
btn.onclick = function () {
  if (inputbox.value.length == 0) {
    alert("Kindly Enter Tasks Name");
  } else {
    task.innerHTML += ` <div class="task">
<span class="spn">${inputbox.value}</span>
<button class="icon">
  <i class="fa fa-trash fa-3" aria-hidden="true" style="    font-size: 30px"
  ></i>
</button>
</div>`;
    let delicon = document.querySelectorAll(".icon");

    for (let i = 0; i < delicon.length; i++) {
      delicon[i].onclick = function () {
        console.log(delicon[i]);
        this.parentNode.remove();
      };
    }
  }
};
