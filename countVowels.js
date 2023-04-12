/*
countvowels in string
*/
function countvowels(vowels, string) {
  let vowelsCount = 0;
  for (let i = 0; i < vowels.length; i++) {
    if (string.includes(vowels[i])) {
      vowelsCount += 1;
    }
  }
  return `String '${string}' contains ${vowelsCount} no of vowels`;
}
console.log(countvowels(["a", "e", "i", "o", "u"], "siraj"));
console.log(countvowels(["a", "e", "i", "o", "u"], "courses"));
