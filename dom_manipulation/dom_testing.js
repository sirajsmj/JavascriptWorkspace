const fruits = document.getElementById("Fruits");
console.log(fruits.innerText);
fruits.style.textAlign = "center";
fruits.style.border = "2px solid green";
fruits.style.width = "fit-content";
fruits.style.margin = "0 auto";
fruits.style.padding = "5px";

const listadd = document.createElement("li"); //<li></li>
const listtext = document.createTextNode("strawberry");
listadd.appendChild(listtext); //<li>strawberry</li>

const ultag = document.querySelector("ul");

ultag.appendChild(listadd);

const listag = document.querySelectorAll("li"); // [li,li,li,li,li]
for (let [index, li] of listag.entries()) {
  li.style.listStyleType = "none";
  li.style.padding = "10px";
  li.innerText =
    `${index + 1}` +
    "." +
    li.innerText.charAt(0).toUpperCase() +
    li.innerText.slice(1);
}

let oddlist = document.querySelectorAll("li:nth-Child(odd)");
const evenlist = document.querySelectorAll("li:nth-Child(even)");

oddlist.forEach(function (lielement, index) {
  lielement.style.border = "2px solid black";
  lielement.style.background = "lightblue";
  //lielement.innerText=`${index+1}`+"-"+lielement.innerText.charAt(0).toUpperCase()+lielement.innerText.slice(1)
});

for (let i = 0; i < evenlist.length; i++) {
  evenlist[i].style.border = "2px solid black";
  evenlist[i].style.background = "white";
  // evenlist[i].innerText=`${i+1}`+"."+evenlist[i].innerText
}
//fruits.previousElementSibling.innerText="DOM Test"

const headone = document.createElement("h1");
headone.id = "titleone";

headone.appendChild(document.createTextNode("Dom test"));

const heading5 = document.getElementById("title");
const divtag = document.querySelector("#div");
divtag.replaceChild(headone, heading5);
//ultag.removeChild(listag[listag.length-1])
listag[listag.length - 1].remove();

ultag.classList.add("ulclass");
ultag.classList.add("ulclass2");
ultag.classList.remove("ulclass");
console.log(ultag.classList[0]);
