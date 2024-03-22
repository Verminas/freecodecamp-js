function translatePigLatin(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let result;
  let arrStr = str.split('');
if(arrStr.every(item => !vowels.includes(item))) {
  result = str + 'ay';
} else {
  if(!vowels.includes(arrStr[0])) {
    while(!vowels.includes(arrStr[0])){
      arrStr.push(arrStr[0]);
      arrStr.shift(arrStr[0]);
    }
    result = arrStr.join('') + 'ay';
  } else{
    result = arrStr.join('') + 'way';
  }
}
  return result;
}

translatePigLatin("consonant");
