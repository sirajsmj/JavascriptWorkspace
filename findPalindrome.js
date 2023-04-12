function checkPalindrome(word) {
  let palindrome;
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) == word.charAt(word.length - i - 1)) {
      palindrome = "it is palindrome";
    } else {
      palindrome = "Its not a palindrome";
    }
  }
  return palindrome;
}
console.log(checkPalindrome("malayalam"));
console.log(checkPalindrome("madam"));
console.log(checkPalindrome("elephant"));
