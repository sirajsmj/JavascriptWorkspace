const obj = {
  countryName: "India",
  nationalFlower: "lotus",
  nationalAnimal: "tiger",
};
const obj1 = {};

for (let x in obj) {
  obj1[obj[x]] = x;
}
console.log(obj1);
