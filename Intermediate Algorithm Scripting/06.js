function myReplace(str, before, after) {
  const uppercaseRegex = /[A-Z]/;
  const arrStr = str.split(' ');
  let change;
  if (uppercaseRegex.test(before[0])) {
    change = after[0].toUpperCase() + after.slice(1);
  } else {
    change = after[0].toLowerCase() + after.slice(1);
  }
  arrStr.splice(arrStr.indexOf(before), 1, change);
  return arrStr.join(' ');
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
