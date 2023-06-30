const amount = [254, 471, 851, 369, -214, -741, -657, -328];

const output = amount.forEach(function (x) {
  return `The positive values are:`, x * 2;
});

console.log(output); // undefined

const name = "Mohamed Sehu Siraj";

const result = name
  .split(" ")
  .map((a) => a.charAt(0).toLowerCase())
  .join("");

console.log(result);

const filterResult = amount.filter(function (a) {
  return a > 300;
});
console.log(filterResult);
const redcueResult = amount.reduce(function (acc, cur) {
  console.log(acc);
  return acc + cur;
}, 0);
console.log(redcueResult);

const findResult = amount.find(function (a) {
  return a > 300;
});
console.log(findResult);

const findLastResult = amount.findLast(function (a) {
  return a > 300;
});
console.log(findLastResult);

const ArraywithObj = [
  { Name: "fathima", Age: 20, Gender: "Female" },
  { Name: "siraj", Age: 30, Gender: "Male" },
  { Name: "yasmeen", Age: 40, Gender: "Female" },
];

const findObjResult = ArraywithObj.find(function (a) {
  return a.Name === "fathima";
});
console.log(findObjResult);
ArraywithObj.forEach(function (element) {
  element["username"] = element.Name[0];
});
console.log(ArraywithObj);
