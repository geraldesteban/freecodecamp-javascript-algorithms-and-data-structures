"use strict";
const userInput = prompt(
  `Choose project to test:\n- Palindrome Checker \n- Roman Numeral Converter \n- Caesars Cipher \n- Telephone Number Validator \n- Cash Register`
);

// 1st Project: Palindrome Checker
if (userInput === "Palindrome Checker") {
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
  const askPalin = prompt("Enter palindrome: ");
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
  console.log(`RESULT: ${palindromeCheck(askPalin)}`);
}

// 2nd Project: Roman Numeral Converter
if (userInput === "Roman Numeral Converter") {
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
  const askRomNum = prompt("Enter to convert: ");
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
  console.log(`RESULT: ${convertToRoman(askRomNum)}`);
}

// 3rd Project: Caesars Cipher
if (userInput === "Caesars Cipher") {
  /* Data Test:
rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
rot13("SERR YBIR?") should decode to the string FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
*/
  const askCipher = prompt("Enter to decode: ");
  const rot13 = function (str) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const alphaRot13 = "NOPQRSTUVWXYZABCDEFGHIJKLM";
    return str.replace(/[A-Za-z]/g, function (char) {
      const i = alphabet.indexOf(char);
      return alphaRot13[i];
    });
  };
  console.log(`RESULT: ${rot13(askCipher)}`);
}

// 4th Project: Telephone Number Validator
if (userInput === "Telephone Number Validator") {
  /* Data Test:
telephoneCheck("555-555-5555") should return a boolean.
telephoneCheck("1 555-555-5555") should return true.
telephoneCheck("1 (555) 555-5555") should return true.
telephoneCheck("5555555555") should return true.
telephoneCheck("555-555-5555") should return true.
telephoneCheck("(555)555-5555") should return true.
telephoneCheck("1(555)555-5555") should return true.
telephoneCheck("555-5555") should return false.
telephoneCheck("5555555") should return false.
telephoneCheck("1 555)555-5555") should return false.
telephoneCheck("1 555 555 5555") should return true.
telephoneCheck("1 456 789 4444") should return true.
telephoneCheck("123**&!!asdf#") should return false.
telephoneCheck("55555555") should return false.
telephoneCheck("(6054756961)") should return false.
telephoneCheck("2 (757) 622-7382") should return false.
telephoneCheck("0 (757) 622-7382") should return false.
telephoneCheck("-1 (757) 622-7382") should return false.
telephoneCheck("2 757 622-7382") should return false.
telephoneCheck("10 (757) 622-7382") should return false.
telephoneCheck("27576227382") should return false.
telephoneCheck("(275)76227382") should return false.
telephoneCheck("2(757)6227382") should return false.
telephoneCheck("2(757)622-7382") should return false.
telephoneCheck("555)-555-5555") should return false.
telephoneCheck("(555-555-5555") should return false.
telephoneCheck("(555)5(55?)-5555") should return false.
telephoneCheck("55 55-55-555-5") should return false.
telephoneCheck("11 555-555-5555") should return false.
*/
  const askTelephone = prompt("Enter to check telephone: ");
  const telephoneCheck = function (str) {
    const validUSPhoneNumber =
      /^(1\s?)?(\(\d{3}\)|\d{3})([-\s]?)\d{3}([- \s]?)\d{4}$/;
    return validUSPhoneNumber.test(str);
  };
  console.log(`RESULT: ${telephoneCheck(askTelephone)}`);
}

// 5th Project: Cash Register
if (userInput === "Cash Register") {
  /* Data Test:
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.
(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
*/
  const checkCashRegister = function (price, cash, cid) {
    const currencyUnits = [
      ["PENNY", 0.01],
      ["NICKEL", 0.05],
      ["DIME", 0.1],
      ["QUARTER", 0.25],
      ["ONE", 1],
      ["FIVE", 5],
      ["TEN", 10],
      ["TWENTY", 20],
      ["ONE HUNDRED", 100],
    ];

    let changeDue = cash - price;
    let totalCID = 0;
    let change = [];

    for (const [, val] of cid) {
      totalCID += val;
    }

    if (totalCID < changeDue) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (totalCID === changeDue) {
      return { status: "CLOSED", change: cid };
    } else {
      for (let i = currencyUnits.length - 1; i >= 0; i--) {
        const [unit, unitValue] = currencyUnits[i];
        const CIDAmounts = cid[i][1];
        const maxUnits = Math.floor(CIDAmounts / unitValue);
        const unitsToGive = Math.min(
          maxUnits,
          Math.floor(changeDue / unitValue)
        );
        const amountToDeduct = unitsToGive * unitValue;

        if (unitsToGive > 0) {
          change.push([unit, amountToDeduct]);
          changeDue -= amountToDeduct;
          changeDue = Number(changeDue.toFixed(2));
        }
      }

      if (changeDue === 0) {
        if (totalCID === change.reduce((acc, [, value]) => acc + value, 0)) {
          return { status: "CLOSED", change: cid };
        } else {
          return { status: "OPEN", change };
        }
      } else {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      }
    }
  };
  console.log(
    `I already provided a data test and here the data test and result:`
  );
  console.log(`DATA TEST: 3.26, 100, [
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100],
    ])`);
  console.log(
    `RESULT: ${
      (3.26,
      100,
      [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90],
        ["FIVE", 55],
        ["TEN", 20],
        ["TWENTY", 60],
        ["ONE HUNDRED", 100],
      ])
    }`
  );
}
