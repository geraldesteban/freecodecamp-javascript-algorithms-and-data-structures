"use strict";

// 1st Project: Palindrome Checker
/* Data Test:
palindrome("eye") should return a boolean.
palindrome("eye") should return true.
palindrome("_eye") should return true.
palindrome("race car") should return true.
palindrome("not a palindrome") should return false.
palindrome("A man, a plan, a canal. Panama") should return true.
palindrome("never odd or even") should return true.
palindrome("nope") should return false.
palindrome("almostomla") should return false.
palindrome("My age is 0, 0 si ega ym.") should return true.
palindrome("1 eye for of 1 eye.") should return false.
palindrome("0_0 (: /-\ :) 0-0") should return true.
palindrome("five|\_/|four") should return false. 
*/

const palindromeCheck = function (str) {
  const mainStr = str.split(" ").join("").toLowerCase();
  const reverseStr = str
    .split(" ")
    .join("")
    .split("")
    .reverse()
    .join("")
    .toLowerCase();
  console.log(
    `Data Test: ${mainStr.replace(
      /[^a-zA-Z0-9\s]/g,
      ""
    )} or ${reverseStr.replace(/[^a-zA-Z0-9\s]/g, "")}`
  );
  if (
    mainStr.replace(/[^a-zA-Z0-9\s]/g, "") ===
    reverseStr.replace(/[^a-zA-Z0-9\s]/g, "")
  ) {
    return true;
  } else {
    return false;
  }
};
console.log(palindromeCheck("My age is 0, 0 si ega ym."));
