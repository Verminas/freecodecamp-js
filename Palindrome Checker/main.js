/*
Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.


*/

function palindrome(str) {
  let strNew = str.replace(/[^a-zA-Z0-9]/g, '');
  let str1;
  let str2;
  if (strNew.length % 2 === 0) {
    str1 = strNew.slice(0, strNew.length / 2);
    str2 = strNew.slice(strNew.length / 2);
    return str1.toLowerCase() === str2.split('').reverse().join('').toLowerCase();
  } else {
    str1 = strNew.slice(0, Math.floor(strNew.length / 2));
    str2 = strNew.slice(Math.ceil(strNew.length / 2));
    return str1.toLowerCase() === str2.split('').reverse().join('').toLowerCase();
  }
}

palindrome("eye");
