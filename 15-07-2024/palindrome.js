function palindrome(word) {
  let rev = word.split("").reverse().join("");
  if (rev === word) {
    console.log("Palindrome");
  } else {
    console.log("Not Palindrome");
  }
}

palindrome("madam");





