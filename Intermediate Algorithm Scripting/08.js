function fearNotLetter(str) {
  let letter = undefined;
  const array = str.toLowerCase().split('');
  const arrayCharCode = array.map((item, index) => str.charCodeAt(index));
  arrayCharCode.forEach((item, index, array) => {
    if(item + 1 !== array[index + 1] && array[index + 1] !== undefined) {
      letter = String.fromCharCode(item + 1);
    }
  });
  return letter;
}

fearNotLetter("abce");
