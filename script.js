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
  if (
    str
      .split(" ")
      .join("")
      .toLowerCase()
      .replace(/[^a-zA-Z0-9\s]/g, "") ===
    str
      .split(" ")
      .join("")
      .split("")
      .reverse()
      .join("")
      .toLowerCase()
      .replace(/[^a-zA-Z0-9\s]/g, "")
  ) {
    return true;
  } else {
    return false;
  }
};
console.log(palindromeCheck("My age is 0, 0 si ega ym."));

const convertToRoman = function (num) {
  const RomanArabic = {
    M: "1000",
    CM: "900",
    D: "500",
    CD: "400",
    C: "100",
    XC: "90",
    L: "50",
    XL: "40",
    X: "10",
    IX: "9",
    V: "5",
    IV: "4",
    I: "1",
  };
  let result = "";
  for (const roman in RomanArabic) {
    while (num >= RomanArabic[roman]) {
      result += roman;
      num -= RomanArabic[roman];
    }
  }
  return result;
};
console.log(convertToRoman(3999));
