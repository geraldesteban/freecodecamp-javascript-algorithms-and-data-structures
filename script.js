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

// 2nd Project: Roman Numeral Converter
/* Data Test:
convertToRoman(2) should return the string II.
convertToRoman(3) should return the string III.
convertToRoman(4) should return the string IV.
convertToRoman(5) should return the string V.
convertToRoman(9) should return the string IX.
convertToRoman(12) should return the string XII.
convertToRoman(16) should return the string XVI.
convertToRoman(29) should return the string XXIX.
convertToRoman(44) should return the string XLIV.
convertToRoman(45) should return the string XLV.
convertToRoman(68) should return the string LXVIII
convertToRoman(83) should return the string LXXXIII
convertToRoman(97) should return the string XCVII
convertToRoman(99) should return the string XCIX
convertToRoman(400) should return the string CD
convertToRoman(500) should return the string D
convertToRoman(501) should return the string DI
convertToRoman(649) should return the string DCXLIX
convertToRoman(798) should return the string DCCXCVIII
convertToRoman(891) should return the string DCCCXCI
convertToRoman(1000) should return the string M
convertToRoman(1004) should return the string MIV
convertToRoman(1006) should return the string MVI
convertToRoman(1023) should return the string MXXIII
convertToRoman(2014) should return the string MMXIV
convertToRoman(3999) should return the string MMMCMXCIX
*/

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
