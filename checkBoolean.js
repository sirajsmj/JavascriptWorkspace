/*
Return a Boolean if a number is divisible by 10
*/
function checkboolean(checkNumbers) {
  let answer;
  if (checkNumbers % 10 == 0) {
    answer = "True";
  } else {
    answer = "false";
  }
  return answer;
}

console.log(checkboolean(100));
console.log(checkboolean(99));
