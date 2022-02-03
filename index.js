function isPalindrome(word) {
  // reverse the input string
  const reversedWord = reverseString(word);
  // compare the reversed string to the input
  return word === reversedWord;
}

function reverseString(word) {
  return word.split("").reverse().join("");
}

/* 
  Add your pseudocode here

  reverse the input string

if the reversed string is the same as the input
  return true
else
  return false
*/

/*
  Add written explanation of your solution here

  The isPalindrome() function takes in a string as an argument, creates a
  const variable and assigns a helper function reverseSring() which takes
  the original string as an argument.

  The reverseString() function returns the string with a method chain of
  split(), reverse(), and join().

  isPalindrome then returns a true or false value when comparing the original
  string to the reversed string.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("wow"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("people"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
