/*
Print a table containing multiplication tables
*/
function multiplicationTables(number) {
  let table = "";
  for (let i = 1; i < 11; i++) {
    table += `${i} * ${number} = ${i * number}\n`;
  }
  return table;
}
console.log(multiplicationTables(2));
