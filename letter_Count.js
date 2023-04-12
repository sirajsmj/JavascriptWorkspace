function letterCount(word, letter) {
  let resultCount = 0;
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) == letter) {
      resultCount += 1;
    }
  }
  return resultCount;
}
console.log(letterCount("definition", "i"));
